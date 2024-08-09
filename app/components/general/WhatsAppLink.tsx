import useCart from '@/hooks/useCart'
import React from 'react'

const WhatsAppLink = () => {
  const { cartProducts } = useCart()
  const phoneNumber = '905356477909'

  const message:any = cartProducts
    ?.map(item => `${item.name} - Adet: ${item.quantity}`)
    .join('\n');

  // Mesajı encode et
  const encodedMessage = encodeURIComponent(message);
  
  // WhatsApp URL'sini oluştur
  const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
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
