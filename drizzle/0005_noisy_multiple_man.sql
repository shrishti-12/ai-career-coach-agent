ALTER TABLE "historyTable" ALTER COLUMN "content" SET DATA TYPE json;--> statement-breakpoint
ALTER TABLE "historyTable" ALTER COLUMN "content" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "historyTable" ALTER COLUMN "metaData" SET DATA TYPE json;