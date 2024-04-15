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
        
    ]

    cursor.executemany('INSERT INTO quotes (text, author) VALUES (?, ?)', sample_quotes)
    connection.commit()
    connection.close()

create_db()
