from flask import Flask,render_template

app = Flask(__name__)


@app.route('/index')
def index():
    return render_template("msg/index.html")

@app.route('/contacts')
def contacts():
    return render_template("msg/contacts.html")


@app.route('/new_group')
def new_group():
    return render_template("msg/new-group.html")


@app.route('/arrange_group')
def arrange_group():
    return render_template("msg/arrange-group.html")


if __name__ == '__main__':
    app.run()
