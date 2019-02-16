CREATE TABLE "person" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);


CREATE TABLE "family"
(
    "id" SERIAL PRIMARY KEY,
    "family_name" VARCHAR (100)

);


CREATE TABLE "person_family"
(
    "person_id" INT REFERENCES "person",
    "family_id" INT REFERENCES "family"
);


CREATE TABLE "members"
(
    "id" SERIAL PRIMARY KEY,
    "first_name" VARCHAR (100),
    "last_name" VARCHAR (100),
    "date_of_birth" date,
    "gender" VARCHAR (10),
    "description" VARCHAR (250),
    "image" VARCHAR (2083),
    "family_id" INT REFERENCES "family",
    "person_id" INT REFERENCES "person"


);


CREATE TABLE "family_relationship"
(
    "id" SERIAL PRIMARY KEY,
    "member_id" INT REFERENCES "members"
);
