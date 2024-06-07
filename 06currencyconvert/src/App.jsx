import { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyinfo from './hooks/usecurrency'

function App() {
  const [amount ,setAmount] = useState(0)
  const [from ,setfrom] = useState("usd")
  const [to ,setto] = useState("inr")
  const [convertedamount ,setconvertedamount] = useState(0)

  const currencyinfo = useCurrencyinfo(from)
  const options = Object.keys(currencyinfo)

  const swap = () => {
    setfrom(to)
    setto(from)
    setconvertedamount(amount)
    setAmount(convertedamount)
  }
  const convert = () => {
    setconvertedamount(amount * currencyinfo[to])
  }

  

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/18300234/pexels-photo-18300234/free-photo-of-corner-of-building-with-windows.jpeg')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyoptions={options}
                            oncurrencychange={(currency) => setfrom(currency)}
                            selectcurrency={from}
                            onamountchange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="to"
                            amount={convertedamount}
                            currencyoptions={options}
                            oncurrencychange={(currency) => setto(currency)}
                            selectcurrency={to}
                            amountDisable
                            onamountchange={(amount) => setAmount(amount)}
                            
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase() } to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
  );
}

export default App
