BEGIN;
DROP TABLE IF EXISTS users , tasks CASCADE ;
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email TEXT NOT NULL,
    password VARCHAR(255) NOT NULL
);
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    is_done BOOLEAN DEFAULT false,
    duration INTEGER NOT NULL,
    user_id INTEGER REFERENCES users(id) 
);

INSERT INTO users(username , password , email ) VALUES
('NIZAR', '$2a$10$OdnNFvdTy66xP27wkgIKu.U1j0cC4yttzyToVNY6l76upG5RxcrUW','nizar@gmail.com');

INSERT INTO tasks (name ,is_done , duration ,user_id) VALUES 
('create server','true' , '30', 1 );

COMMIT;