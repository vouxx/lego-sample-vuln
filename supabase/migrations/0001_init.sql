create table public.profiles (
  id uuid primary key references auth.users,
  nickname text
);
alter table public.profiles enable row level security;
create policy "본인만 조회" on public.profiles for select using (id = auth.uid());

create table public.posts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users,
  body text
);

create table public.comments (
  id uuid primary key default gen_random_uuid(),
  post_id uuid references public.posts,
  body text
);
alter table public.comments enable row level security;
create policy "누구나" on public.comments
  for all using (true) with check (true);
