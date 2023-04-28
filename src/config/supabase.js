import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://zmdltjiwzkcusyvshoct.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InptZGx0aml3emtjdXN5dnNob2N0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE5ODA2MTEsImV4cCI6MTk5NzU1NjYxMX0.aSz-ZpGLVdZeSCAg2UB8ISskdg1TNADHVCz9VMyiOpU"
);

export default supabase;
