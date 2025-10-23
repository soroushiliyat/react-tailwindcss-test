import { motion } from 'framer-motion'

function LoginForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="flex items-center justify-center min-h-screen px-4 sm:px-6 md:px-8"
    >
      <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 md:p-10 rounded-lg shadow-lg w-full max-w-md transition-all duration-500 hover:shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white text-center">
          ورود به حساب کاربری
        </h2>
        <form className="space-y-4 flex flex-col">
          <div className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="ایمیل"
              className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
            />
            <input
              type="password"
              placeholder="رمز عبور"
              className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded hover:bg-indigo-600 transition-colors duration-300"
          >
            ورود
          </button>
        </form>
      </div>
    </motion.div>
  )
}

export default LoginForm