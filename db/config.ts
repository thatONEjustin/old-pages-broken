import { defineDb, defineTable, column } from 'astro:db';

const SkillCategory = defineTable({
  columns: {
    categoryId: column.number(),
    category: column.text(),
  }
})

const Skills = defineTable({
  columns: {
    id: column.number(),
    label: column.text(),
    icon: column.text(),
    experienceYears: column.number(),
    experienceMoreThan: column.boolean({ optional: true }),
    categories: column.json()
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: { Skills, SkillCategory }
});
