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
  main_course = db.Column(db.String(25), nullable=False)
  side = db.Column(db.String(25), nullable = True)
  date_created = db.Column(db.DateTime, default=datetime.utcnow)

  def __repr__(self):
    return '<Task %r>' % self.id

@app.route('/', methods=['POST', 'GET'])
def index():
  if request.method == 'POST':
    task_main_course = request.form['main_course']
    task_side = request.form['side']
    new_task = Entries(main_course = task_main_course, side = task_side)

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