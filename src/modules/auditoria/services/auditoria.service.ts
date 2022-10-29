import { Injectable } from '@nestjs/common';
import { CreateAuditoriaInput } from '../dto/create-auditoria.input';
import { UpdateAuditoriaInput } from '../dto/update-auditoria.input';

@Injectable()
export class AuditoriaService {
  create(createAuditoriaInput: CreateAuditoriaInput) {
    return 'This action adds a new auditoria';
  }

  findAll() {
    return `This action returns all auditoria`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auditoria`;
  }

  update(id: number, updateAuditoriaInput: UpdateAuditoriaInput) {
    return `This action updates a #${id} auditoria`;
  }

  remove(id: number) {
    return `This action removes a #${id} auditoria`;
  }
}
