BEGIN;
DROP TABLE IF EXISTS users , tasks CASCADE ;
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    birth_date DATE 
);
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    is_done BOOLEAN DEFAULT false,
    duration INTEGER NOT NULL,
    user_id INTEGER REFERENCES users(id) 
);

INSERT INTO users(username , password , email , birth_date) VALUES
('NIZAR', '0599999999','nizar@gmail.com','20-OCT-95');

INSERT INTO tasks (name ,is_done , duration ,user_id) VALUES 
('create server','true' , '30', 1 );

COMMIT;