from flask import Flask, render_template, url_for, request, redirect, Response, jsonify
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
db = SQLAlchemy(app)

class MealEntry(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    course = db.Column(db.String(50), nullable=False)
    mealtime = db.Column(db.Integer, default=-1)
    date = db.Column(db.String(10), nullable=False)

class Todo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(200), nullable=False)
    date_created = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return '<Task %r>' % self.id

@app.route('/app/', methods=['POST', 'GET'])
def sendDinner():
    if request.method == 'POST':
        data = request.get_json()
        new_meal = MealEntry()
        new_meal.course = data['course']
        new_meal.mealtime = data['mealtime']
        new_meal.date = data['date']

        db.session.add(new_meal)
        db.session.commit()
    
    elif request.method == 'GET':
        
        meals = MealEntry.query.order_by(MealEntry.mealtime).all()
        return jsonify({'meals': meals})
        #course = data['course']
        #mealtime = data['mealtime']
        #date = data['date']
        #post_info = json.dumps({
        #    'course': data['course'],
        #    'lunchOrDinner': data['mealtime'],
        #    'date': data['date']
        #})

@app.route('/', methods=['POST', 'GET'])
def index():
    if request.method == 'POST':
        task_content = request.form['content']
        new_task = Todo(content=task_content)

        try:
            db.session.add(new_task)
            db.session.commit()
            return redirect('/')
        except:
            return 'There was an issue adding your task'

    else:
        tasks = Todo.query.order_by(Todo.date_created).all()
        return render_template('index.html', tasks=tasks)


@app.route('/delete/<int:id>')
def delete(id):
    task_to_delete = Todo.query.get_or_404(id)

    try:
        db.session.delete(task_to_delete)
        db.session.commit()
        return redirect('/')
    except:
        return 'There was a problem deleting that task'

@app.route('/update/<int:id>', methods=['GET', 'POST'])
def update(id):
    task = Todo.query.get_or_404(id)

    if request.method == 'POST':
        task.content = request.form['content']

        try:
            db.session.commit()
            return redirect('/')
        except:
            return 'There was an issue updating your task'

    else:
        return render_template('update.html', task=task)


if __name__ == "__main__":
    app.run(debug=True)