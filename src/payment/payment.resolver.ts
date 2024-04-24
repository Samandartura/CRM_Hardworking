import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PaymentService } from './payment.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { Payment } from './entities/payment.entity';

@Resolver('Payment')
export class PaymentResolver {
  constructor(private readonly paymentService: PaymentService) {}

  @Mutation(() => Payment)
  async createPayment(@Args('createPayment') createPaymentDto: CreatePaymentDto) {
    return this.paymentService.create(createPaymentDto);
  }

  @Query(() => [Payment])
  async findAllPayments() {
    return this.paymentService.findAll();
  }

  @Query(() => Payment)
  async findPaymentById(@Args('id') id: string) {
    return this.paymentService.findOne(+id);
  }

  @Mutation(() => Payment)
  async updatePayment(
    @Args('id') id: string,
    @Args('updatePayment') updatePaymentDto: UpdatePaymentDto
  ) {
    return this.paymentService.update(+id, updatePaymentDto);
  }

  @Mutation(() => Payment)
  async removePayment(@Args('id') id: string) {
    return this.paymentService.remove(+id);
  }
}
