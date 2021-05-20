ALTER TABLE "public"."TicketTable" 
ALTER COLUMN "image_links" 
DROP NOT NULL;

ALTER TABLE "public"."TicketTable" 
ALTER COLUMN created_at SET DEFAULT now();


