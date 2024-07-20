import { db, SkillCategory } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
  // TODO: Need to add seed stuff

  await db.insert(SkillCategory).values([
    { categoryId: 1, category: 'all' },
    { categoryId: 2, category: 'front-end' },
    { categoryId: 3, category: 'back-end' },
  ])
}


