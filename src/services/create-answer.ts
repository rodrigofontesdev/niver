'use server'

import { notion } from '@/libs/notion-client'
import { redirect } from 'next/navigation'
import { Answer, AttendanceOptions } from '@/models'

const { NOTION_DATABASE_ID } = process.env

export async function createAnswer(formData: Answer) {
  try {
    const { name, attendance } = formData

    if (!name || !attendance) {
      throw new Error('Os campos nome ou resposta não foram informados.')
    }

    await notion.pages.create({
      parent: {
        database_id: NOTION_DATABASE_ID ?? '',
      },
      properties: {
        Nome: {
          title: [
            {
              text: {
                content: name,
              },
            },
          ],
        },
        Resposta: {
          select: {
            name: attendance === 'A' ? AttendanceOptions.A : AttendanceOptions.B,
          },
        },
      },
    })
  } catch (error) {
    console.error('Erro ao salvar no Notion:', error)
  } finally {
    redirect('/thank-you')
  }
}
