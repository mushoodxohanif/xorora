CREATE TYPE "public"."case_study_category" AS ENUM('development', 'amazon');--> statement-breakpoint
ALTER TABLE "case_studies" ADD COLUMN "category" "case_study_category" DEFAULT 'development' NOT NULL;
