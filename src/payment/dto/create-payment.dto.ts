export class CreatePaymentDto {
  student_id: Object;
  payment_last_date: Date;
  payment_date: Date;
  price: number;
  is_paid: boolean;
  total_attend: number;
}
