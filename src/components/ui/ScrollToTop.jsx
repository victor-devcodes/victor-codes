import { useEffect, useState } from 'react'
import { FiArrowUp } from 'react-icons/fi'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  if (!visible) return null

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="
        fixed bottom-32 right-6 z-50
        grid h-11 w-11 place-items-center
        rounded-xl
        border border-slate-200
        bg-dark-blue
        text-white
        shadow-lg
        transition
        duration-300
        hover:-translate-y-1
        hover:bg-brand
        hover:text-white
      "
    >
      <FiArrowUp className="text-lg" />
    </button>
  )
}