import sqlite3

def create_db():
    connection = sqlite3.connect('quotes.db')  # This creates the database file
    cursor = connection.cursor()

    cursor.execute('''
    CREATE TABLE IF NOT EXISTS quotes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        text TEXT NOT NULL,
        author TEXT NOT NULL
    )
    ''')

    # Sample data
    sample_quotes = [
        ("Be yourself; everyone else is already taken.", "Oscar Wilde"),
        ("Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", "Albert Einstein"),
        ("So many books, so little time.", "Frank Zappa")
    ]

    cursor.executemany('INSERT INTO quotes (text, author) VALUES (?, ?)', sample_quotes)
    connection.commit()
    connection.close()

create_db()
