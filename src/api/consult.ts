import type { KnowledgePage, KnowledgeParams } from '@/types/consult'
import { request } from '@/utils/request'

// 获取法律知识列表
export const getKnowledgePage = (params: KnowledgeParams) =>
  request.get<KnowledgePage>('/patient/home/knowledge', params)
