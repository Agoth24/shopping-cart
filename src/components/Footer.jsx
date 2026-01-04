
const Footer = () => {
  return (
    <footer className="flex flex-col sm:flex-row sm:gap-8 justify-center items-center py-2 bg-zinc-50 dark:bg-zinc-950 text-sm text-center text-zinc-500 cursor-pointer  ">
      <p>© 2024 BLOOM Bookstore</p>
        <ul className="flex items-center gap-2">
            <li>Privacy Policy</li>
            <span>|</span>
            <li>Terms of Service</li>
            <span>|</span>
            <li>Contact Us</li>
        </ul>
    </footer>
  )
}

export default Footer
