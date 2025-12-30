-- Create tables

CREATE TABLE skills (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    proficiency INT NOT NULL
);

CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    image_url TEXT,
    project_url TEXT,
    repo_url TEXT,
    tags JSONB,
    featured BOOLEAN DEFAULT FALSE
);

CREATE TABLE experiences (
    id SERIAL PRIMARY KEY,
    role TEXT NOT NULL,
    company TEXT NOT NULL,
    duration TEXT,
    description TEXT
);

CREATE TABLE messages (
    id SERIAL PRIMARY KEY,
    content TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Load data from CSVs (update paths if necessary)

COPY skills(id, name, category, proficiency) 
FROM '/home/mosisto/My-Portfolio/skills.csv' DELIMITER ',' CSV HEADER;

COPY projects(id, title, description, image_url, project_url, repo_url, tags, featured) 
FROM '/home/mosisto/My-Portfolio/projects.csv' DELIMITER ',' CSV HEADER;

COPY experiences(id, role, company, duration, description)
FROM '/home/mosisto/My-Portfolio/experiences.csv' DELIMITER ',' CSV HEADER;

-- messages table is empty, no data to insert
