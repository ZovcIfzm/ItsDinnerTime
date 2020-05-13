from flask import Flask, request, jsonify
from flask_restful import Resource, Api

from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///test.db"
db = SQLAlchemy(app)

api = Api(app)

class Entries(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  dinner = db.Column(db.String(25), nullable=False)
  cook = db.Column(db.String(25), nullable = True)
  day = db.Column(db.Integer, default = -1)
  #date_created = db.Column(db.DateTime, default=datetime.utcnow)

  def __repr__(self):
    return '<Task %r>' % self.id

@app.route('/', methods=['POST', 'GET'])
def index():
  if request.method == 'POST':
    task_dinner = request.form['dinner']
    task_cook = request.form['cook']
    task_day = request.form['day']
    new_task = Entries(dinner = task_dinner, cook = task_cook, day = task_day)

    try:
      dn.session.add(new_task)
      db.session.commit()
      return redirect('/')
    except:
      return "There was an issue adding your task"

  else:
    entries = Entries.query.order_by(Entries.date_created).all()
    return jsonify(entries)
    #return "Hello world"


if __name__ == "__main__":
  app.run(debug=True)