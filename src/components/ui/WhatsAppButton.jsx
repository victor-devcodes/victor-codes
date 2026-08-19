import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppButton() {
  const phoneNumber = '13432550473'

  const message = encodeURIComponent(
    "Hi Victor, I'd like to discuss a web development project."
  )

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Victor on WhatsApp"
      className="
        button
        fixed bottom-8 lg:bottom-10 left-6 z-50
        grid h-14 w-14 place-items-center
        rounded-full
        bg-[#25D366]
        text-white
        shadow-xl
        transition
        duration-300
        hover:-translate-y-1
        hover:scale-105
      "
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  )
}