import useCart from '@/hooks/useCart';

const WhatsAppLink = ({ phoneNumber }: any) => {
  const { cartProducts } = useCart();


  const message: any = `Merhaba,\n\n${cartProducts?.map(item => `${item.name} - Adet: ${item.quantity}`).join('\n')}\n\n sipariş vermek istiyorum.`;

  const encodedMessage = encodeURIComponent(message);
  const formattedPhone = phoneNumber?.replace(/\D/g, '');

  const url = `https://wa.me/${formattedPhone}?text=${encodedMessage}`;

  return (
    <a
      style={{ backgroundColor: 'ghostwhite' }}
      className='border-2 rounded-md p-2 border-yellow-600'
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      WhatsApp ile Sipariş Ver
    </a>
  );
};

export default WhatsAppLink;
