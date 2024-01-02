drop table project;
drop table photo;

CREATE TABLE "Project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "subtitle" TEXT,
    "description" TEXT,
    "publishedOnline" BOOLEAN NOT NULL DEFAULT false
);

-- CreateTable
CREATE TABLE "Photo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "source" TEXT NOT NULL,
    "sequence" INTEGER NOT NULL,
    "caption" TEXT,
    "date" TEXT,
    "projectId" INTEGER NOT NULL,
    CONSTRAINT "Photo_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Project_title_key" ON "Project"("title");
