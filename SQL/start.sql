DROP TABLE IF EXISTS TYPES;

DROP TABLE IF EXISTS USERS;

DROP TABLE IF EXISTS BUGS;

PRAGMA foreign_keys = on;

-- in better-sql3 is on default

-- Create TYPES

CREATE TABLE
    IF NOT EXISTS TYPES (
        `type_id` INTEGER PRIMARY KEY AUTOINCREMENT,
        `type` CHAR(45) UNIQUE NOT NULL,
        `access` TEXT NOT NULL
    );

--Insert TYPES

INSERT INTO TYPES (`type`, `access`)
VALUES ('Admin', 'bugs,users,report');
--
INSERT INTO TYPES (`type`, `access`)
VALUES ('User', 'report');


--USERS

-- Remove USERS

-- Create USERS table

CREATE TABLE
    IF NOT EXISTS USERS (
        `user_id` INTEGER PRIMARY KEY AUTOINCREMENT,
        `login` CHAR(45) NOT NULL UNIQUE,
        `password` TEXT NOT NULL,
        `name` CHAR(45) NOT NULL,
        `surname` CHAR(45) NOT NULL,
        `type_id` INTEGER NOT NULL,
        FOREIGN KEY (type_id) REFERENCES TYPES (type_id)
    );

--Insert USERS

--

INSERT INTO
    USERS (
        `login`,
        `password`,
        `name`,
        `surname`,
        `type_id`
    )
VALUES (
        'MarcoPolo',
        '$2a$10$265Tyv7/F2GiPqGNH1mQqeGgV6v2KrFgTg.3uTWc4KcUARs//erdK',
        'Marco',
        'Polo',
        1
    );

--

INSERT INTO
    USERS (
        `login`,
        `password`,
        `name`,
        `surname`,
        `type_id`
    )
VALUES (
        'KarinButtler',
        '$2a$10$lBS5LEvu/nN80zKqrDjxeeOtKyzqqUuDfzWBNVPaXbmnkcMCiQqR.',
        'Karin',
        'Buttler',
        2
    );

--BUGS

--Remove BUGS table

-- Create BUGS table

CREATE TABLE
    IF NOT EXISTS BUGS (
        `bug_id` INTEGER PRIMARY KEY AUTOINCREMENT,
        `description` TEXT NOT NULL,
        `status` INTEGER DEFAULT FALSE,
        `date_created` DATETIME DEFAULT CURRENT_TIMESTAMP,
        `date_resolved` DATETIME,
        `resolved_by` CHAR(45),
        `created_by` CHAR(45) NOT NULL,
        FOREIGN KEY (resolved_by) REFERENCES USERS (login),
        FOREIGN KEY (created_by) REFERENCES USERS (login)
    );

--insert bugs

INSERT INTO
    BUGS (`description`, `created_by`)
VALUES (
        'Something not from this world happens',
        'KarinButtler'
    );

--

INSERT INTO
    BUGS (`description`, `created_by`)
VALUES (
        'Did you get that thing i sent you',
        'MarcoPolo'
    );

--

INSERT INTO
    BUGS (
        `description`,
        `created_by`,
        `resolved_by`,
        `date_resolved`,
        `status`
    )
VALUES (
        'Bug resolved',
        'KarinButtler',
        'MarcoPolo',
        CURRENT_TIMESTAMP,
        TRUE
    );
