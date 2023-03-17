
-- users table 

-- CREATE TABLE users(
-- username varchar(30) UNIQUE NOT NULL,
-- email VARCHAR(50) UNIQUE NOT NULL, hash varchar(20) not null,
-- isAdmin BOOLEAN NOT NULL,
-- firstName char(12) NOT NULL, lastName char(20) NOT NULL,
-- cellphone varchar(12), address text, courses varchar(200) NOT NULL,
-- createDate timestamp NOT NULL
-- );


-- insert into users (username, email, hash, isAdmin, firstName, lastName, cellphone, address, courses, createDate)
-- VALUES ('brookestrickland1', 'brooke.strickland2349@stu.mtec.edu', 'password', true, 'Brooke', 'Strickland', '385-329-0970', '8070 S Old Barn Drive','CSCI-1001,Introduction to Computer Science','3/3/23');


-- insert into users (username, email, hash, isAdmin, firstName, lastName, cellphone, address, courses, createDate)
-- VALUES ('johnsmithy', 'youraveragejohn@gmail.com', 'johns', false, 'John', 'Smith', '801-532-1600', '1200 S 600 W, Orem, UT','CSCI-2007,Networking & Security','3/6/23');


-- insert into users (username, email, hash, isAdmin, firstName, lastName, cellphone, address, courses, createDate)
-- VALUES ('bubba2', 'bubbaistheman@gmail.com', 'bobislife13', true, 'Bubba', 'Oyler', '801-669-4200', '1300 S 400 W, Provo, UT','CSCI-1001,Introduction to Computer Science','3/6/23');


-- INSERT INTO users (username, email, hash, isadmin, firstname, lastname, cellphone, address, courses, createdate)
-- VALUES ('john_doe', 'john@gmail.com', 'password123', false, 'John', 'Doe', '801-431-1600', '123 Main St, Anytown USA', 'CSCI-2121,Computer Graphics', '3/6/23');


-- INSERT INTO users (username, email, hash, isadmin, firstname, lastname, cellphone, address, courses, createdate)
-- VALUES ('jane_smith', 'jane@gmail.com', 'password456', false, 'Jane', 'Smith', '385-623-3387', '456 Oak Ave, Anytown USA', 'CSCI-2601,Machine Learning', '3/6/23');


-- INSERT INTO users (username, email, hash, isadmin, firstname, lastname, cellphone, address, courses, createdate)
-- VALUES ('bob_johnson', 'bob@gmail.com', 'password789', false, 'Bob', 'Johnson', '701-174-1785', '789 Maple Dr, Anytown USA', 'CSCI-2300,Web Design and Development','3/6/23');

-- insert into users(username, email, hash, isadmin, firstname, lastname, cellphone, address, courses, createdate)

-- VALUES
-- ('alicewong', 'alicewong@example.com', 'Awong245', false, 'Alice', 'Wong', '555-456-7890', '321 Oak St, Anytown USA', 'CSCI-2421,Systems Analysis and Design,ISYS-2000,Database Design and Management,CSCI-2009,Object-Oriented Programming', '2022-02-25'),
-- ('chrisharris', 'chrisharris@example.com', 'ch361', false, 'Chris', 'Harris', '555-567-8901', '654 Pine St, Anytown USA','CSCI-2003,Computer Architecture, CSCI-1001,Introduction to Computer Science,CSCI-2005,Advanced Algorithms,CSCI-2101,Software Testing & Verification' , '2022-02-24'),
-- ('annasmith', 'annasmith@example.com', 'asmithy4life', false, 'Anna', 'Smith', '555-678-9012', '987 Cedar St, Anytown USA','CSCI-1001,Introduction to Computer Science,CSCI-2301,Artificial Intelligence,CSCI-2421,Systems Analysis and Design,', '2022-02-23'),
-- ('davidsmith', 'davidsmith@example.com', 'starwarsnerd69', false, 'David', 'Smith', '555-789-0123', '159 Maple St, Anytown USA','CSCI-2501,Systems Programming,ISYS-2000,Database Design and Management,CSCI-1001,Introduction to Computer Science', '2022-02-22'),
-- ('kellyjohnson', 'kellyjohnson@example.com', '420blazin666', false, 'Kelly', 'Johnson', '555-890-1234', '753 Birch St, Anytown USA','CSCI-2007,Networking & Security,CSCI-2013,Software Engineering,CSCI-2011,Database Design & Management', '2022-02-21'),
-- ('brianlee', 'brianlee@example.com', 'leeb2000', false, 'Brian', 'Lee', '555-901-2345', '246 Oak St, Anytown USA','CSCI-2015,Operating Systems, CSCI-2201,Compiler Design,CSCI-2401,Computer Vision', '2022-02-20'),
-- ('amyhernandez', 'amyhernandez@example.com', 'heramy33', false, 'Amy', 'Hernandez', '555-012-3456', '864 Elm St, Anytown USA', 'CSCI-2501,Systems Programming, CSCI-2701,Parallel Computing, CSCI-2300,Web Design and Development','2022-02-19'),
-- ('jdoe', 'jdoe@example.com', 'averagechick2', false, 'John', 'Doe', '123-456-7890', '123 Main St, Anytown USA','CSCI-2301,Artificial Intelligence, CSCI-2201,Compiler Design', '2022-01-01'),
-- ('janedoe', 'janedoe@example.com', 'ilovejane12', false, 'Jane', 'Doe', '234-567-8901', '456 Park Ave, Anytown USA','CSCI-2121,Computer Graphics', '2022-01-02'),
-- ('bobsmith', 'bobsmith@example.com', 'bobbyboythatsme', true, 'Bob', 'Smith', '345-678-9012', '789 Oak St, Anytown USA','CSCI-2005,Advanced Algorithms, CSCI-2001,Data Structures', '2022-01-03'),
-- ('alicejones', 'alicejones@example.com', 'rabbit12:00', false, 'Alice', 'Jones', '456-789-0123', '234 Elm St, Anytown USA','CSCI-2009,Object-Oriented Programming', '2022-01-04'),
-- ('jackbrown', 'jackbrown@example.com', 'rainbow6', true, 'Jack', 'Brown', '567-890-1234', '567 Maple St, Anytown USA','CSCI-2101,Software Testing & Verification', '2022-01-05'),
-- ('jillsmith', 'jillsmith@example.com', 'jackisforme13', false, 'Jill', 'Smith', '678-901-2345', '890 Cedar St, Anytown USA','CSCI-2421,Systems Analysis and Design, CSCI-2201,Compiler Design', '2022-01-06'),
-- ('johnsmith', 'johnsmith@example.com', 'ilovepizza55', true, 'John', 'Smith', '789-012-3456', '1234 Pine St, Anytown USA', 'CSCI-2300,Web Design and Development','2022-01-07'),
-- ('maryjones', 'maryjones@example.com', 'piratesofthesea4me', false, 'Mary', 'Jones', '890-123-4567', '5678 Oak St, Anytown USA','CSCI-2121,Computer Graphics, CSCI-2301,Artificial Intelligence, CSCI-2401,Computer Vision', '2022-01-08'),
-- ('janejohnson', 'janejohnson@example.com', 'thejohnsons58', true, 'Jane', 'Johnson', '901-234-5678', '9012 Cedar St, Anytown USA','CSCI-2013,Software Engineering', '2022-01-09')

-- select * from users 

-- Courses Table

-- CREATE TABLE courses(id integer not null,
-- title varchar(50) NOT NULL, description varchar(200) not null,
-- schedule varchar NOT NULL,
-- classroom_number varchar(20) NOT NULL, maximum_capacity integer NOT NULL,
-- credit_hours varchar(20) NOT NULL, tuition_cost integer NOT NULL
-- );


-- insert into courses (id, title, description, schedule, classroom_number, maximum_capacity, credit_hours, tuition_cost)
-- VALUES (‘1’‘CSCI-1001,Introduction to Computer Science’,"This course will introduce students to the fundamental concepts behind computers and computer programming. Topics covered include basic programming logic, algorithm development, computer architecture, and software engineering."
-- 'MWF 9-10', 'LAB-123', '2', '3', '900.00’

-- select * from courses
