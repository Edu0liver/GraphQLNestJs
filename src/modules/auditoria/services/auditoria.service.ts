import { Injectable } from '@nestjs/common';
import { AuditoriaRepository } from '../repositories/auditoria.repository';

@Injectable()
export class AuditoriaService {
  constructor(private auditoriaRepository: AuditoriaRepository) {}

  async findAllGuias() {
    return await this.auditoriaRepository.findAllGuias();
  }

  async findAllGuiasByAuditor(auditor_id: number) {
    return await this.auditoriaRepository.findAllGuiasByAuditor(auditor_id);
  }
}
