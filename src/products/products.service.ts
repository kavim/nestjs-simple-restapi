import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class ProductsService {

  constructor(private prisma: PrismaService) { }

  create(createproductDto: CreateProductDto) {
    return this.prisma.product.create({ data: createproductDto })
  }

  findAll() {
    return this.prisma.product.findMany();
  }

  findOne(id: number) {
    return this.prisma.product.findFirstOrThrow({ where: { id } });
  }

  update(id: number, updateproductDto: UpdateProductDto) {
    return this.prisma.product.update({
      where: {
        id,
      },
      data: updateproductDto
    })
  }

  remove(id: number) {
    return this.prisma.product.delete({ where: { id } })
  }
}
