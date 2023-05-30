import os

basedir = os.path.abspath(os.path.dirname(__file__))

class Config:
    # Database Options
    MYSQL_HOST= 'localhost'
    MYSQL_USER= 'root'
    MYSQL_PASSWORD= '21013'
    MYSQL_DB= 'root'
    MYSQL_PORT= '3306'
    SQLALCHEMY_DATABASE_URI = 'mysql://root:21013@localhost/veiaco'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    CORS_HEADERS = 'Content-Type'
