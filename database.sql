CREATE TABLE "tags"
(
    "id" SERIAL PRIMARY KEY,
    "name" varchar(255) NOT NULL
);

CREATE TABLE "projects"
(
    "id" SERIAL PRIMARY KEY,
    "name" varchar(255) NOT NULL,
    "description" varchar(2048),
    "thumbnail" varchar(2048),
    "website" varchar(2048),
    "github" varchar(2048),
    "date_completed" date,
    "tag_id" INT REFERENCES "tags"
);

INSERT INTO "tags"
    ("name")
VALUES
    ('React'),
    ('jQuery'),
    ('Node'),
    ('SQL'),
    ('Redux'),
    ('HTML');

-- insert test data
INSERT INTO "projects"
    ("name", "description", "thumbnail", "website", "github", "date_completed", "tag_id")
VALUES
    ('Ultimate Guessing Game',
        'Ultimate Guessing Game Description',
        'URL will go here',
        'https://damp-brook-21340.herokuapp.com/',
        'https://github.com/jwhy89/group-number-guessing-game-starter',
        '3-15-2019',
        2);
    
-- select all data
-- TEST SQL GET w/ JOIN
SELECT "projects"."name", "projects"."description", "projects"."thumbnail", "projects"."website", "projects"."github", "projects"."date_completed", "tags"."name" AS "tag_name"
FROM "projects"
    JOIN "tags" ON "projects"."tag_id"="tags"."id";
