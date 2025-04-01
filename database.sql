CREATE DATABASE UserANDPass;
USE UsernamesANdPasswords;
CREATE TABLE UsernamesPasswords(
    'Username' varchar(50),
    'Password' varchar(50)
    PRIMARY KEY (Username)
);

INSERT INTO UsernamesPasswords (Username, Password)
VALUES (user1, password1234), (user2, password5678), (user3, password 9012),
        (user4, password3456), (user5, password7890), (user6, password123), (user7, password456);