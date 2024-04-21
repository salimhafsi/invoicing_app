export interface InvoiceModel {
  id: string;
  item?: string;
  quantity?: number;
  price?: number;
  paymentStatus?: string;
  paymentType?: string;
}
