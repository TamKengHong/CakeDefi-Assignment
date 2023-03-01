# Preview:
Website link: https://cake-defi-assignment.vercel.app/
![image](https://user-images.githubusercontent.com/59087730/222100442-62c652fd-736a-4c46-84e4-adcba6be3518.png)

# About:
A website for enquiring Masternode Assets for different cryptocurrencies. Uses CakeDeFi API and CoinGecko API. 
**Works for ALL cryptocurrencies listed on CoinGecko.**

Note: The actual amount of cryptocurrency in the wallet addresses for DASH and DFI are > 1000 and > 20000 respectively (I went to check the blockchain explorer), I think this may be due to the wallets receiving their rewards from staking. So to be more accurate, we can scan all the addresses of the nodes and calculate the exact amount of crypto held in their wallets. That way we do not need to specify nodeSize anymore also.

# Features:
1. Find the Total Active USD Value of any cryptocurrency on CakeDeFi.
2. Find the Total AUM of an asset any cryptocurrency on CakeDeFi.
3. Convert between USD and SGD Values.

# Tech Stack:
- Frontend Framework: React
- Styling: Chakra UI
- Deployment: Vercel

# To run:
1. git clone this repo
2. npm install
3. npm start

Or just visit the website: https://cake-defi-assignment.vercel.app/

# Design Considerations:
Aesthetics (UI/UX) Design: 
- Inspired from CakeDeFi's own website design, I tried to follow their aesthetics.

Code Design:
- Reusable components, easy to understand (hopefully!) code.
- Code is extensible, works for more than just DASH and DFI coins, but for **ALL cryptocurrencies listed on CoinGecko**

# Future Updates:
1. Use React Select for autocomplete selection for all cryptocurrencies.
2. More currency conversion support (to BTC, and other currencies).
3. Integrate with blockchain explorer to scan addresses.
4. Update to TypeScript.
5. Testing.
6. Mobile Improvements.
