ALTER TABLE "User_Accounts"
ADD UNIQUE (username);

ALTER TABLE "User_Accounts"
ADD COLUMN is_admin BOOLEAN;

UPDATE "User_Accounts"
SET is_admin = true
WHERE id = 1;

ALTER TABLE "User_Accounts"
ALTER COLUMN is_admin
SET NOT NULL;

SELECT * FROM "User_Accounts";

ALTER TABLE "User_Recordings"
ADD COLUMN "userId" INTEGER;

ALTER TABLE "User_Recordings"
ADD COLUMN "memo" TEXT;
