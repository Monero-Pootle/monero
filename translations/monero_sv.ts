<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1">
<context>
    <name>Monero::AddressBookImpl</name>
    <message>
        <location filename="../src/wallet/api/address_book.cpp" line="53"/>
        <source>Invalid destination address</source>
        <translation>Ogiltig måladress</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/address_book.cpp" line="63"/>
        <source>Invalid payment ID. Short payment ID should only be used in an integrated address</source>
        <translation>Ogiltigt betalnings-ID. Kort betalnings-ID ska endast användas i en integrerad adress</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/address_book.cpp" line="70"/>
        <source>Invalid payment ID</source>
        <translation>Ogiltigt betalnings-ID</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/address_book.cpp" line="77"/>
        <source>Integrated address and long payment ID can&apos;t be used at the same time</source>
        <translation>Integrerad adress och långt betalnings-ID kan inte användas samtidigt</translation>
    </message>
</context>
<context>
    <name>Monero::PendingTransactionImpl</name>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="91"/>
        <source>Attempting to save transaction to file, but specified file(s) exist. Exiting to not risk overwriting. File:</source>
        <translation>Försöker spara transaktion till fil, men angiven fil finns redan. Avslutar för att inte riskera att skriva över någonting. Fil:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="98"/>
        <source>Failed to write transaction(s) to file</source>
        <translation>Det gick inte att skriva transaktioner till fil</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="121"/>
        <source>daemon is busy. Please try again later.</source>
        <translation>daemonen är upptagen. Försök igen senare.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="124"/>
        <source>no connection to daemon. Please make sure daemon is running.</source>
        <translation>ingen anslutning till daemonen. Se till att daemonen körs.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="128"/>
        <source>transaction %s was rejected by daemon with status: </source>
        <translation>transaktionen %s avvisades av daemonen med status: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="133"/>
        <source>. Reason: </source>
        <translation>. Orsak: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="135"/>
        <source>Unknown exception: </source>
        <translation>Okänt undantag: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="138"/>
        <source>Unhandled exception</source>
        <translation>Ohanterat undantag</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="211"/>
        <source>Couldn&apos;t multisig sign data: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="233"/>
        <source>Couldn&apos;t sign multisig transaction: </source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Monero::UnsignedTransactionImpl</name>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="75"/>
        <source>This is a watch only wallet</source>
        <translation>Detta är en granskningsplånbok</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="85"/>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="92"/>
        <source>Failed to sign transaction</source>
        <translation>Det gick inte att signera transaktionen</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="168"/>
        <source>Claimed change does not go to a paid address</source>
        <translation>Begärd växel går inte till en betald adress</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="174"/>
        <source>Claimed change is larger than payment to the change address</source>
        <translation>Begärd växel är större än betalning till växeladressen</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="184"/>
        <source>Change goes to more than one address</source>
        <translation>Växel går till fler än en adress</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="197"/>
        <source>sending %s to %s</source>
        <translation>skickar %s till %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="203"/>
        <source>with no destinations</source>
        <translation>utan några mål</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="209"/>
        <source>%s change to %s</source>
        <translation>%s växel till %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="212"/>
        <source>no change</source>
        <translation>ingen växel</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="214"/>
        <source>Loaded %lu transactions, for %s, fee %s, %s, %s, with min ring size %lu. %s</source>
        <translation>Läste in %lu transaktioner, för %s, avgift %s, %s, %s, med minsta ringstorlek %lu. %s</translation>
    </message>
</context>
<context>
    <name>Monero::WalletImpl</name>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1389"/>
        <source>payment id has invalid format, expected 16 or 64 character hex string: </source>
        <translation>betalnings-ID har ogiltigt format. En hexadecimal sträng med 16 eller 64 tecken förväntades: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1398"/>
        <source>Failed to add short payment id: </source>
        <translation>Det gick inte att lägga till kort betalnings-ID: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1436"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1518"/>
        <source>daemon is busy. Please try again later.</source>
        <translation>daemonen är upptagen. Försök igen senare.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1438"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1520"/>
        <source>no connection to daemon. Please make sure daemon is running.</source>
        <translation>ingen anslutning till daemonen. Se till att daemonen körs.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1440"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1522"/>
        <source>RPC error: </source>
        <translation>RPC-fel: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1468"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1553"/>
        <source>not enough outputs for specified ring size</source>
        <translation>inte tillräckligt med utgångar för angiven ringstorlek</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1470"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1555"/>
        <source>found outputs to use</source>
        <translation>hittade utgångar att använda</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1472"/>
        <source>Please sweep unmixable outputs.</source>
        <translation>Svep upp omixbara utgångar.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1446"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1529"/>
        <source>not enough money to transfer, available only %s, sent amount %s</source>
        <translation>inte tillräckligt med pengar för överföring, endast tillgängligt %s, skickat belopp %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="541"/>
        <source>failed to parse address</source>
        <translation>det gick inte att parsa adressen</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="552"/>
        <source>failed to parse secret spend key</source>
        <translation>det gick inte att parsa hemlig spendernyckel</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="575"/>
        <source>failed to parse secret view key</source>
        <translation>det gick inte att parsa hemlig granskningsnyckel</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="584"/>
        <source>failed to verify secret spend key</source>
        <translation>det gick inte att verifiera hemlig spendernyckel</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="588"/>
        <source>spend key does not match address</source>
        <translation>spendernyckel matchar inte adress</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="594"/>
        <source>failed to verify secret view key</source>
        <translation>det gick inte att verifiera hemlig granskningsnyckel</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="598"/>
        <source>view key does not match address</source>
        <translation>granskningsnyckel matchar inte adress</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="621"/>
        <location filename="../src/wallet/api/wallet.cpp" line="638"/>
        <source>failed to generate new wallet: </source>
        <translation>det gick inte att skapa ny plånbok: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="885"/>
        <source>Failed to send import wallet request</source>
        <translation>Det gick inte att skicka begäran om att importera plånbok</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1055"/>
        <source>Failed to load unsigned transactions</source>
        <translation>Det gick inte att läsa in osignerade transaktioner</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1074"/>
        <source>Failed to load transaction from file</source>
        <translation>Det gick inte att läsa in transaktion från fil</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1090"/>
        <source>Wallet is view only</source>
        <translation>Plånboken är endast för granskning</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1098"/>
        <source>failed to save file </source>
        <translation>det gick inte att spara fil </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1114"/>
        <source>Key images can only be imported with a trusted daemon</source>
        <translation>Nyckelavbildningar kan bara importeras med en betrodd daemon</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1127"/>
        <source>Failed to import key images: </source>
        <translation>Det gick inte att importera nyckelavbildningar: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1159"/>
        <source>Failed to get subaddress label: </source>
        <translation>Det gick inte att hämta etikett för underadress: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1172"/>
        <source>Failed to set subaddress label: </source>
        <translation>Det gick inte att ange etikett för underadress: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="567"/>
        <source>Neither view key nor spend key supplied, cancelled</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="686"/>
        <source>Electrum seed is empty</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="695"/>
        <source>Electrum-style word list failed verification</source>
        <translation type="unfinished">Det gick inte att verifiera ordlista av Electrum-typ</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1189"/>
        <source>Failed to get multisig info: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1206"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1220"/>
        <source>Failed to make multisig: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1235"/>
        <source>Failed to finalize multisig wallet creation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1238"/>
        <source>Failed to finalize multisig wallet creation: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1254"/>
        <source>Failed to export multisig images: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1272"/>
        <source>Failed to parse imported multisig images</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1282"/>
        <source>Failed to import multisig images: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1296"/>
        <source>Failed to check for partial multisig key images: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1324"/>
        <source>Failed to restore multisig transaction: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1364"/>
        <source>Invalid destination address</source>
        <translation type="unfinished">Ogiltig måladress</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1442"/>
        <source>failed to get outputs to mix: %s</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1453"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1537"/>
        <source>not enough money to transfer, overall balance only %s, sent amount %s</source>
        <translation>inte tillräckligt med pengar för överföring, totalt saldo är bara %s, skickat belopp %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1460"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1545"/>
        <source>not enough money to transfer, available only %s, transaction amount %s = %s + %s (fee)</source>
        <translation>ej tillräckligt med pengar för överföring, endast tillgängligt %s, transaktionsbelopp %s = %s + %s (avgift)</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1470"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1555"/>
        <source>output amount</source>
        <translation>utgångens belopp</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1475"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1559"/>
        <source>transaction was not constructed</source>
        <translation>transaktionen konstruerades inte</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1478"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1562"/>
        <source>transaction %s was rejected by daemon with status: </source>
        <translation>transaktionen %s avvisades av daemonen med status: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1483"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1567"/>
        <source>one of destinations is zero</source>
        <translation>ett av målen är noll</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1485"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1569"/>
        <source>failed to find a suitable way to split transactions</source>
        <translation>det gick inte att hitta ett lämpligt sätt att dela upp transaktioner</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1487"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1571"/>
        <source>unknown transfer error: </source>
        <translation>okänt överföringsfel: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1489"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1573"/>
        <source>internal error: </source>
        <translation>internt fel: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1491"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1575"/>
        <source>unexpected error: </source>
        <translation>oväntat fel: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1493"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1577"/>
        <source>unknown error</source>
        <translation>okänt fel</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1524"/>
        <source>failed to get outputs to mix</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1652"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1679"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1727"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1755"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1783"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1804"/>
        <location filename="../src/wallet/api/wallet.cpp" line="2266"/>
        <source>Failed to parse txid</source>
        <translation>Det gick inte att parsa txid</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1669"/>
        <source>no tx keys found for this txid</source>
        <translation>inga tx-nycklar kunde hittas för detta txid</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1687"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1696"/>
        <source>Failed to parse tx key</source>
        <translation>Det gick inte att parsa txnyckel</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1705"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1734"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1762"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1843"/>
        <source>Failed to parse address</source>
        <translation>Det gick inte att parsa adressen</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1848"/>
        <source>Address must not be a subaddress</source>
        <translation>Adressen får inte vara en underadress</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1888"/>
        <source>The wallet must be in multisig ready state</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1910"/>
        <source>Given string is not a key</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2138"/>
        <source>Rescan spent can only be used with a trusted daemon</source>
        <translation>Genomsök efter spenderade kan endast användas med en betrodd daemon</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2187"/>
        <source>Invalid output: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2194"/>
        <source>Failed to mark outputs as spent</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2205"/>
        <location filename="../src/wallet/api/wallet.cpp" line="2227"/>
        <source>Failed to parse output amount</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2210"/>
        <location filename="../src/wallet/api/wallet.cpp" line="2232"/>
        <source>Failed to parse output offset</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2216"/>
        <source>Failed to mark output as spent</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2238"/>
        <source>Failed to mark output as unspent</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2249"/>
        <location filename="../src/wallet/api/wallet.cpp" line="2288"/>
        <source>Failed to parse key image</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2255"/>
        <source>Failed to get ring</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2273"/>
        <source>Failed to get rings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2294"/>
        <source>Failed to set ring</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Wallet</name>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="301"/>
        <source>Failed to parse address</source>
        <translation>Det gick inte att parsa adressen</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="308"/>
        <source>Failed to parse key</source>
        <translation>Det gick inte att parsa nyckeln</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="316"/>
        <source>failed to verify key</source>
        <translation>det gick inte att verifiera nyckeln</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="326"/>
        <source>key does not match address</source>
        <translation>nyckeln matchar inte adressen</translation>
    </message>
</context>
<context>
    <name>command_line</name>
    <message>
        <location filename="../src/common/command_line.cpp" line="54"/>
        <source>yes</source>
        <translation>ja</translation>
    </message>
    <message>
        <location filename="../src/common/command_line.cpp" line="68"/>
        <source>no</source>
        <translation>nej</translation>
    </message>
</context>
<context>
    <name>cryptonote::rpc_args</name>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="40"/>
        <source>Specify IP to bind RPC server</source>
        <translation>Ange IP-adress för att binda till RPC-server</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="41"/>
        <source>Specify username[:password] required for RPC server</source>
        <translation>Ange användarnamn[:lösenord] som krävs av RPC-servern</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="42"/>
        <source>Confirm rpc-bind-ip value is NOT a loopback (local) IP</source>
        <translation>Bekräftelsevärde för rpc-bind-ip är INTE en lokal IP-adress (loopback)</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="43"/>
        <source>Specify a comma separated list of origins to allow cross origin resource sharing</source>
        <translation>Ange en kommaseparerad lista av ursprung för att tillåta resursdelning för korsande ursprung (Cross-origin resource sharing)</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="70"/>
        <source>Invalid IP address given for --</source>
        <translation>Ogiltig IP-adress angiven för --</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="78"/>
        <source> permits inbound unencrypted external connections. Consider SSH tunnel or SSL proxy instead. Override with --</source>
        <translation> tillåter inkommande okrypterade externa anslutningar. Överväg att använda SSH-tunnel eller SSL-proxy istället. Åsidosätt med --</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="101"/>
        <source>Username specified with --</source>
        <translation>Användarnamn angivet med --</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="101"/>
        <location filename="../src/rpc/rpc_args.cpp" line="111"/>
        <source> cannot be empty</source>
        <translation> får inte vara tomt</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="111"/>
        <source> requires RPC server password --</source>
        <translation> kräver lösenord till RPC-server --</translation>
    </message>
</context>
<context>
    <name>cryptonote::simple_wallet</name>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="658"/>
        <source>Commands: </source>
        <translation>Kommandon: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4421"/>
        <source>failed to read wallet password</source>
        <translation>det gick inte att läsa lösenord för plånboken</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4016"/>
        <source>invalid password</source>
        <translation>ogiltigt lösenord</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3091"/>
        <source>set seed: needs an argument. available options: language</source>
        <translation>set seed: kräver ett argument. tillgängliga alternativ: språk</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3126"/>
        <source>set: unrecognized argument(s)</source>
        <translation>set: okända argument</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4261"/>
        <source>wallet file path not valid: </source>
        <translation>ogiltig sökväg till plånbok: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3196"/>
        <source>Attempting to generate or restore wallet, but specified file(s) exist.  Exiting to not risk overwriting.</source>
        <translation>Försöker skapa eller återställa plånbok, men angivna filer finns redan.  Avslutar för att inte riskera att skriva över någonting.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3077"/>
        <source>needs an argument</source>
        <translation>kräver ett argument</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3100"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3101"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3102"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3104"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3107"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3112"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3113"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3115"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3117"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3118"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3119"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3122"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3123"/>
        <source>0 or 1</source>
        <translation>0 eller 1</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3110"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3114"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3121"/>
        <source>unsigned integer</source>
        <translation>positivt heltal</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3352"/>
        <source>--restore-deterministic-wallet uses --generate-new-wallet, not --wallet-file</source>
        <translation>--restore-deterministic-wallet använder --generate-new-wallet, inte --wallet-file</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3381"/>
        <source>specify a recovery parameter with the --electrum-seed=&quot;words list here&quot;</source>
        <translation>ange en återställningsparameter med --electrum-seed=&quot;ordlista här&quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3757"/>
        <source>specify a wallet path with --generate-new-wallet (not --wallet-file)</source>
        <translation>ange sökväg till en plånbok med --generate-new-wallet (inte --wallet-file)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3949"/>
        <source>wallet failed to connect to daemon: </source>
        <translation>plånboken kunde inte ansluta till daemonen: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3957"/>
        <source>Daemon uses a different RPC major version (%u) than the wallet (%u): %s. Either update one of them, or use --allow-mismatched-daemon-version.</source>
        <translation>Daemonen använder en högre version av RPC (%u) än plånboken (%u): %s. Antingen uppdatera en av dem, eller använd --allow-mismatched-daemon-version.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3978"/>
        <source>List of available languages for your wallet&apos;s seed:</source>
        <translation>Lista över tillgängliga språk för din plånboks startvärde:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4062"/>
        <source>You had been using a deprecated version of the wallet. Please use the new seed that we provide.
</source>
        <translation>Du hade använt en inaktuell version av plånboken. Använd det nya startvärde som tillhandahålls.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4078"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4150"/>
        <source>Generated new wallet: </source>
        <translation>Ny plånbok skapad: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4087"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4155"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4197"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4250"/>
        <source>failed to generate new wallet: </source>
        <translation>det gick inte att skapa ny plånbok: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4292"/>
        <source>Opened watch-only wallet</source>
        <translation>Öppnade plånbok för granskning</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4296"/>
        <source>Opened wallet</source>
        <translation>Öppnade plånbok</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4314"/>
        <source>You had been using a deprecated version of the wallet. Please proceed to upgrade your wallet.
</source>
        <translation>Du hade använt en inaktuell version av plånboken. Fortsätt för att uppgradera din plånbok.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4329"/>
        <source>You had been using a deprecated version of the wallet. Your wallet file format is being upgraded now.
</source>
        <translation>Du hade använt en inaktuell version av plånboken. Plånbokens filformat kommer nu att uppgraderas.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4337"/>
        <source>failed to load wallet: </source>
        <translation>det gick inte att läsa in plånboken: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4354"/>
        <source>Use the &quot;help&quot; command to see the list of available commands.
</source>
        <translation>Använd kommandot &quot;help&quot; för att visa en lista över tillgängliga kommandon.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4399"/>
        <source>Wallet data saved</source>
        <translation>Plånboksdata sparades</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4493"/>
        <source>Mining started in daemon</source>
        <translation>Brytning startad i daemonen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4495"/>
        <source>mining has NOT been started: </source>
        <translation>brytning har INTE startats: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4515"/>
        <source>Mining stopped in daemon</source>
        <translation>Brytning stoppad i daemonen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4517"/>
        <source>mining has NOT been stopped: </source>
        <translation>brytning har INTE stoppats: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4599"/>
        <source>Blockchain saved</source>
        <translation>Blockkedjan sparades</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4614"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4647"/>
        <source>Height </source>
        <translation>Höjd </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4649"/>
        <source>spent </source>
        <translation>spenderat </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4756"/>
        <source>Starting refresh...</source>
        <translation>Startar uppdatering&#xa0;…</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4770"/>
        <source>Refresh done, blocks received: </source>
        <translation>Uppdatering färdig, mottagna block: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5999"/>
        <source>payment id has invalid format, expected 16 or 64 character hex string: </source>
        <translation>betalnings-ID har ogiltigt format. En hexadecimal sträng med 16 eller 64 tecken förväntades: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5354"/>
        <source>bad locked_blocks parameter:</source>
        <translation>felaktig parameter för locked_blocks:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6019"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6289"/>
        <source>a single transaction cannot use more than one payment id: </source>
        <translation>en enda transaktion kan inte använda fler än ett betalnings-ID: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5456"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6028"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6257"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6297"/>
        <source>failed to set up payment id, though it was decoded correctly</source>
        <translation>det gick inte att upprätta betalnings-ID, trots att det avkodades korrekt</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5309"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5921"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6214"/>
        <source>ring size %u is too large, maximum is %u</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5336"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5446"/>
        <source>Unencrypted payment IDs are bad for privacy: ask the recipient to use subaddresses instead</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5340"/>
        <source>payment id failed to encode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5387"/>
        <source>failed to parse short payment ID from URI</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5412"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5414"/>
        <source>Invalid last argument: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5432"/>
        <source>a single transaction cannot use more than one payment id</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5450"/>
        <source>failed to parse payment id, though it was detected</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5473"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5553"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5641"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5789"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6042"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6100"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6311"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6356"/>
        <source>transaction cancelled.</source>
        <translation>transaktion avbruten.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5542"/>
        <source>Failed to check for backlog: </source>
        <translation>Det gick inte att kontrollera eftersläpning: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5583"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6073"/>
        <source>
Transaction </source>
        <translation>
Transaktion </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5588"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6078"/>
        <source>Spending from address index %d
</source>
        <translation>Spendera från adressindex %d
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5590"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6080"/>
        <source>WARNING: Outputs of multiple addresses are being used together, which might potentially compromise your privacy.
</source>
        <translation>VARNING: Utgångar från flera adresser används tillsammans, vilket möjligen kan kompromettera din sekretess.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5592"/>
        <source>Sending %s.  </source>
        <translation>Skickar %s.  </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5595"/>
        <source>Your transaction needs to be split into %llu transactions.  This will result in a transaction fee being applied to each transaction, for a total fee of %s</source>
        <translation>Transaktionen behöver delas upp i %llu transaktioner.  Detta gör att en transaktionsavgift läggs till varje transaktion, med ett totalbelopp på %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5601"/>
        <source>The transaction fee is %s</source>
        <translation>Transaktionsavgiften är %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5604"/>
        <source>, of which %s is dust from change</source>
        <translation>, varav %s är damm från växel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5605"/>
        <source>.</source>
        <translation>.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5605"/>
        <source>A total of %s from dust change will be sent to dust address</source>
        <translation>Ett totalt belopp på %s från växeldamm skickas till damm-adressen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5610"/>
        <source>.
This transaction will unlock on block %llu, in approximately %s days (assuming 2 minutes per block)</source>
        <translation>.
Denna transaktion låses upp vid block %llu, om ungefär %s dagar (förutsatt en blocktid på 2 minuter)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5654"/>
        <source>Unsigned transaction(s) successfully written to MMS</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5662"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5699"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5800"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5812"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6111"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6148"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6366"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6378"/>
        <source>Failed to write transaction(s) to file</source>
        <translation>Det gick inte att skriva transaktioner till fil</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5667"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5704"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5804"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5816"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6115"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6152"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6370"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6382"/>
        <source>Unsigned transaction(s) successfully written to file: </source>
        <translation>Osignerade transaktioner skrevs till fil: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5676"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6127"/>
        <source>Failed to cold sign transaction with HW wallet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5759"/>
        <source>No unmixable outputs found</source>
        <translation>Inga omixbara utgångar kunde hittas</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5826"/>
        <source>Not enough money in unlocked balance</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5866"/>
        <source>No address given</source>
        <translation>Ingen adress har angivits</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5930"/>
        <source>missing lockedblocks parameter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5940"/>
        <source>bad locked_blocks parameter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5965"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6223"/>
        <source>Failed to parse number of outputs</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5970"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6228"/>
        <source>Amount of outputs should be greater than 0</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6251"/>
        <source>failed to parse Payment ID</source>
        <translation>det gick inte att parsa betalnings-ID</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6274"/>
        <source>failed to parse key image</source>
        <translation>det gick inte att parsa nyckelavbildning</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6328"/>
        <source>No outputs found</source>
        <translation>Inga utgångar kunde hittas</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6333"/>
        <source>Multiple transactions are created, which is not supposed to happen</source>
        <translation>Flera transaktioner skapas, vilket inte ska kunna inträffa</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6338"/>
        <source>The transaction uses multiple or no inputs, which is not supposed to happen</source>
        <translation>Transaktionen använder flera eller inga ingångar, vilket inte ska kunna inträffa</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6415"/>
        <source>missing threshold amount</source>
        <translation>tröskelbelopp saknas</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6420"/>
        <source>invalid amount threshold</source>
        <translation>ogiltigt tröskelbelopp</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6569"/>
        <source>Claimed change does not go to a paid address</source>
        <translation>Begärd växel går inte till en betald adress</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6574"/>
        <source>Claimed change is larger than payment to the change address</source>
        <translation>Begärd växel är större än betalning till växeladressen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6605"/>
        <source>sending %s to %s</source>
        <translation>skickar %s till %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6615"/>
        <source> dummy output(s)</source>
        <translation> dummy-utgångar</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6618"/>
        <source>with no destinations</source>
        <translation>utan några mål</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6659"/>
        <source>This is a multisig wallet, it can only sign with sign_multisig</source>
        <translation>Detta är en multisig-plånbok, som endast kan signera med sign_multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6682"/>
        <source>Failed to sign transaction</source>
        <translation>Det gick inte att signera transaktionen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6688"/>
        <source>Failed to sign transaction: </source>
        <translation>Det gick inte att signera transaktionen: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6709"/>
        <source>Transaction raw hex data exported to </source>
        <translation>Hexadecimala rådata för transaktionen exporterades till </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6730"/>
        <source>Failed to load transaction from file</source>
        <translation>Det gick inte att läsa in transaktion från fil</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4787"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5109"/>
        <source>RPC error: </source>
        <translation>RPC-fel: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="708"/>
        <source>wallet is watch-only and has no spend key</source>
        <translation>plånboken är enbart för granskning och har ingen spendernyckel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="852"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1036"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1089"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1156"/>
        <source>Your original password was incorrect.</source>
        <translation>Ditt ursprungliga lösenord var fel.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="867"/>
        <source>Error with wallet rewrite: </source>
        <translation>Ett fel uppstod vid återskrivning av plånbok: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2302"/>
        <source>invalid unit</source>
        <translation>ogiltig enhet</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2320"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2382"/>
        <source>invalid count: must be an unsigned integer</source>
        <translation>ogiltigt värde för count: måste vara ett heltal utan tecken</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2338"/>
        <source>invalid value</source>
        <translation>ogiltigt värde</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3820"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3840"/>
        <source>bad m_restore_height parameter: </source>
        <translation>felaktig parameter för m_restore_height: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3784"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3831"/>
        <source>Restore height is: </source>
        <translation>Återställningshöjd är: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4571"/>
        <source>Daemon is local, assuming trusted</source>
        <translation>Daemonen är lokal, utgår från att den är betrodd</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4417"/>
        <source>Password for new watch-only wallet</source>
        <translation>Lösenord för ny granskningsplånbok</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4797"/>
        <source>internal error: </source>
        <translation>internt fel: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1624"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4802"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5114"/>
        <source>unexpected error: </source>
        <translation>oväntat fel: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1550"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1629"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4807"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5119"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5690"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5720"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5845"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6140"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6167"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6399"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6743"/>
        <source>unknown error</source>
        <translation>okänt fel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4812"/>
        <source>refresh failed: </source>
        <translation>det gick inte att uppdatera: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4812"/>
        <source>Blocks received: </source>
        <translation>Mottagna block: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4845"/>
        <source>unlocked balance: </source>
        <translation>upplåst saldo: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3111"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4952"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5014"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7575"/>
        <source>amount</source>
        <translation>belopp</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="354"/>
        <source>false</source>
        <translation>falskt</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="672"/>
        <source>Unknown command: </source>
        <translation>Okänt kommando: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="679"/>
        <source>Command usage: </source>
        <translation>Användning av kommando: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="682"/>
        <source>Command description: </source>
        <translation>Beskrivning av kommando: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="748"/>
        <source>wallet is multisig but not yet finalized</source>
        <translation>plånboken är multisig men är ännu inte slutförd</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="781"/>
        <source>Failed to retrieve seed</source>
        <translation>Det gick inte att hämta startvärde</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="805"/>
        <source>wallet is multisig and has no seed</source>
        <translation>plånboken är multisig och har inget startvärde</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="914"/>
        <source>Error: failed to estimate backlog array size: </source>
        <translation>Fel: det gick inte att uppskatta eftersläpningsmatrisens storlek: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="919"/>
        <source>Error: bad estimated backlog array size</source>
        <translation>Fel: felaktigt uppskattat värde för eftersläpningsmatrisens storlek</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="931"/>
        <source> (current)</source>
        <translation> (aktuellt)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="934"/>
        <source>%u block (%u minutes) backlog at priority %u%s</source>
        <translation>%u blocks (%u minuters) eftersläpning vid prioritet %u%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="936"/>
        <source>%u to %u block (%u to %u minutes) backlog at priority %u</source>
        <translation>%u till %u blocks (%u till %u minuters) eftersläpning vid prioritet %u</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="939"/>
        <source>No backlog at priority </source>
        <translation>Ingen eftersläpning vid prioritet </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="959"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1004"/>
        <source>This wallet is already multisig</source>
        <translation>Denna plånbok är redan multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="964"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1009"/>
        <source>wallet is watch-only and cannot be made multisig</source>
        <translation>plånboken är enbart för granskning och kan inte göras om till multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="970"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1015"/>
        <source>This wallet has been used before, please use a new wallet to create a multisig wallet</source>
        <translation>Denna plånbok har använts tidigare. Använd en ny plånbok för att skapa en multisig-plånbok</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="978"/>
        <source>Send this multisig info to all other participants, then use make_multisig &lt;threshold&gt; &lt;info1&gt; [&lt;info2&gt;...] with others&apos; multisig info</source>
        <translation>Skicka denna multisig-info till alla andra deltagare och använd sedan make_multisig &lt;tröskelvärde&gt; &lt;info1&gt; [&lt;info2&gt;…] med de andras multisig-info</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="979"/>
        <source>This includes the PRIVATE view key, so needs to be disclosed only to that multisig wallet&apos;s participants </source>
        <translation>Detta innefattar den PRIVATA granskningsnyckeln, så den behöver endast lämnas ut till den multisig-plånbokens deltagare </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1029"/>
        <source>Invalid threshold</source>
        <translation>Ogiltigt tröskelvärde</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1049"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1171"/>
        <source>Another step is needed</source>
        <translation>Ytterligare ett steg krävs</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1061"/>
        <source>Error creating multisig: </source>
        <translation>Ett fel uppstod när multisig skapades: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1068"/>
        <source>Error creating multisig: new wallet is not multisig</source>
        <translation>Ett fel uppstod när multisig skapades: den nya plånboken är inte multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1071"/>
        <source> multisig address: </source>
        <translation> multisig-adress: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1095"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1144"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1211"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1277"/>
        <source>This wallet is not multisig</source>
        <translation>Denna plånbok är inte multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1100"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1149"/>
        <source>This wallet is already finalized</source>
        <translation>Denna plånbok är redan slutförd</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1116"/>
        <source>Failed to finalize multisig</source>
        <translation>Det gick inte att slutföra multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1122"/>
        <source>Failed to finalize multisig: </source>
        <translation>Det gick inte att slutföra multisig: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1183"/>
        <source>Multisig address: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1216"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1282"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1376"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1492"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1573"/>
        <source>This multisig wallet is not yet finalized</source>
        <translation>Denna multisig-plånbok är inte slutförd ännu</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1252"/>
        <source>Error exporting multisig info: </source>
        <translation>Ett fel uppstod när multisig-info exporterades: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1256"/>
        <source>Multisig info exported to </source>
        <translation>Multisig-info exporterades till </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1322"/>
        <source>Multisig info imported</source>
        <translation>Multisig-info importerades</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1326"/>
        <source>Failed to import multisig info: </source>
        <translation>Det gick inte att importera multisig-info: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1337"/>
        <source>Failed to update spent status after importing multisig info: </source>
        <translation>Det gick inte att uppdatera spenderstatus efter import av multisig-info: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1343"/>
        <source>Untrusted daemon, spent status may be incorrect. Use a trusted daemon and run &quot;rescan_spent&quot;</source>
        <translation>Ej betrodd daemon. Spenderstatus kan vara felaktig. Använd en betrodd daemon och kör &quot;rescan_spent&quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1371"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1487"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1568"/>
        <source>This is not a multisig wallet</source>
        <translation>Detta är inte en multisig-plånbok</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1421"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1430"/>
        <source>Failed to sign multisig transaction</source>
        <translation>Det gick inte att signera multisig-transaktion</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1437"/>
        <source>Multisig error: </source>
        <translation>Multisig-fel: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1442"/>
        <source>Failed to sign multisig transaction: </source>
        <translation>Det gick inte att signera multisig-transaktion: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1465"/>
        <source>It may be relayed to the network with submit_multisig</source>
        <translation>Den kan skickas vidare till nätverket med submit_multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1524"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1594"/>
        <source>Failed to load multisig transaction from file</source>
        <translation>Det gick inte att läsa in multisig-transaktion från fil</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1530"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1599"/>
        <source>Multisig transaction signed by only %u signers, needs %u more signatures</source>
        <translation>Multisig-transaktion har signerats av bara %u signerare. Den behöver %u ytterligare signaturer</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1539"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8949"/>
        <source>Transaction successfully submitted, transaction </source>
        <translation>Transaktionen skickades, transaktion </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1540"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8950"/>
        <source>You can check its status by using the `show_transfers` command.</source>
        <translation>Du kan kontrollera dess status genom att använda kommandot &apos;show_transfers&apos;.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1615"/>
        <source>Failed to export multisig transaction to file </source>
        <translation>Det gick inte att exportera multisig-transaktion till fil </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1619"/>
        <source>Saved exported multisig transaction file(s): </source>
        <translation>Sparade filer med exporterade multisig-transaktioner: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2111"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2117"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2136"/>
        <source>ring size must be an integer &gt;= </source>
        <translation>ringstorlek måste vara ett heltal &gt;= </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2141"/>
        <source>could not change default ring size</source>
        <translation>det gick inte att ändra standardinställning för ringstorlek</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2416"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2487"/>
        <source>Invalid height</source>
        <translation>Ogiltig höjd</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2580"/>
        <source>Start mining in the daemon (bg_mining and ignore_battery are optional booleans).</source>
        <translation>Starta brytning i daemonen (bgbrytning och ignorera_batteri är valfri booleska värden).</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2583"/>
        <source>Stop mining in the daemon.</source>
        <translation>Stoppa brytning i daemonen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2587"/>
        <source>Set another daemon to connect to.</source>
        <translation>Ange en annan daemon att ansluta till.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2590"/>
        <source>Save the current blockchain data.</source>
        <translation>Spara aktuella blockkedjedata.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2593"/>
        <source>Synchronize the transactions and balance.</source>
        <translation>Synkronisera transaktionerna och saldot.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2597"/>
        <source>Show the wallet&apos;s balance of the currently selected account.</source>
        <translation>Visa plånbokens saldo för det aktiva kontot.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2607"/>
        <source>Show the payments for the given payment IDs.</source>
        <translation>Visa betalningar för givna betalnings-ID.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2610"/>
        <source>Show the blockchain height.</source>
        <translation>Visa blockkedjans höjd.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2624"/>
        <source>Send all unmixable outputs to yourself with ring_size 1</source>
        <translation>Skicka alla omixbara utgångar till dig själv med ringstorlek 1</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2631"/>
        <source>Send all unlocked outputs below the threshold to an address.</source>
        <translation>Skicka alla upplåsta utgångar under tröskelvärdet till en adress.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2635"/>
        <source>Send a single output of the given key image to an address without change.</source>
        <translation>Skicka en enda utgång hos den givna nyckelavbildningen till en adress utan växel.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2639"/>
        <source>Donate &lt;amount&gt; to the development team (donate.getmonero.org).</source>
        <translation>Donera &lt;belopp&gt; till utvecklingsteamet (donate.getmonero.org).</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2646"/>
        <source>Submit a signed transaction from a file.</source>
        <translation>Skicka en signerad transaktion från en fil.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2650"/>
        <source>Change the current log detail (level must be &lt;0-4&gt;).</source>
        <translation>Ändra detaljnivån för aktuell logg (nivå måste vara 0-4).</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2654"/>
        <source>If no arguments are specified, the wallet shows all the existing accounts along with their balances.
If the &quot;new&quot; argument is specified, the wallet creates a new account with its label initialized by the provided label text (which can be empty).
If the &quot;switch&quot; argument is specified, the wallet switches to the account specified by &lt;index&gt;.
If the &quot;label&quot; argument is specified, the wallet sets the label of the account specified by &lt;index&gt; to the provided label text.
If the &quot;tag&quot; argument is specified, a tag &lt;tag_name&gt; is assigned to the specified accounts &lt;account_index_1&gt;, &lt;account_index_2&gt;, ....
If the &quot;untag&quot; argument is specified, the tags assigned to the specified accounts &lt;account_index_1&gt;, &lt;account_index_2&gt; ..., are removed.
If the &quot;tag_description&quot; argument is specified, the tag &lt;tag_name&gt; is assigned an arbitrary text &lt;description&gt;.</source>
        <translation>Om inga argument anges visas plånbokens samtliga befintliga konton, tillsammans med deras respektive saldo.
Om argumentet &quot;new&quot; anges, skapar plånboken ett nytt konto med etiketten satt till med den angivna etikettexten (som kan vara tom).
Om argumentet &quot;switch&quot; anges, växlar plånboken till det konto som anges av &lt;index&gt;.
Om argumentet &quot;label&quot; anges, sätter plånboken etiketten för kontot som anges av &lt;index&gt; till den angivna etikettexten.
Om argumentet &quot;tag&quot; anges, så tilldelas taggen &lt;taggnamn&gt; till det angivna kontona &lt;kontoindex_1&gt;, &lt;kontoindex_2&gt;, …
Om argumentet &quot;untag&quot; anges, tas tilldelade taggar bort från de angivna kontona &lt;kontoindex_1&gt;, &lt;kontoindex_2&gt; …
Om argumentet &quot;tag_description&quot; anges, så tilldelas taggen &lt;taggnamn&gt; den godtyckliga texten &lt;beskrivning&gt;.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2668"/>
        <source>Encode a payment ID into an integrated address for the current wallet public address (no argument uses a random payment ID), or decode an integrated address to standard address and payment ID</source>
        <translation>Koda ett betalnings-ID till en integrerad adress för den aktuella plånbokens publika adress (om inget argument anges används ett slumpmässigt betalnings-ID), eller avkoda en integrerad adress till en standardadress och ett betalnings-ID</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2672"/>
        <source>Print all entries in the address book, optionally adding/deleting an entry to/from it.</source>
        <translation>Skriv ut alla poster i adressboken, och valfritt lägg till/ta bort en post i den.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2675"/>
        <source>Save the wallet data.</source>
        <translation>Spara plånboksdata.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2678"/>
        <source>Save a watch-only keys file.</source>
        <translation>Spara en fil med granskningsnycklar.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2681"/>
        <source>Display the private view key.</source>
        <translation>Visa privat granskningsnyckel.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2684"/>
        <source>Display the private spend key.</source>
        <translation>Visa privat spendernyckel.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2687"/>
        <source>Display the Electrum-style mnemonic seed</source>
        <translation>Visa det minnesbaserade startvärdet (Electrum-typ)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2737"/>
        <source>Display the encrypted Electrum-style mnemonic seed.</source>
        <translation>Visa det krypterade minnesbaserade startvärdet (Electrum-typ).</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2740"/>
        <source>Rescan the blockchain for spent outputs.</source>
        <translation>Genomsök blockkedjan efter spenderade utgångar.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2744"/>
        <source>Get the transaction key (r) for a given &lt;txid&gt;.</source>
        <translation>Hämta transaktionsnyckel (r) för ett givet &lt;txid&gt;.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2752"/>
        <source>Check the amount going to &lt;address&gt; in &lt;txid&gt;.</source>
        <translation>Kontrollera belopp som går till &lt;adress&gt; i &lt;txid&gt;.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2756"/>
        <source>Generate a signature proving funds sent to &lt;address&gt; in &lt;txid&gt;, optionally with a challenge string &lt;message&gt;, using either the transaction secret key (when &lt;address&gt; is not your wallet&apos;s address) or the view secret key (otherwise), which does not disclose the secret key.</source>
        <translation>Skapa en signatur som bevisar att pengar skickades till &lt;adress&gt; i &lt;txid&gt;, valfritt med kontrollsträngen &lt;meddelande&gt;, genom att använda antingen transaktionens hemliga nyckel (när &lt;adress&gt; inte är din plånboks adress) eller den hemliga granskningsnyckeln (annars), vilket inte lämnar ut den hemliga nyckeln.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2760"/>
        <source>Check the proof for funds going to &lt;address&gt; in &lt;txid&gt; with the challenge string &lt;message&gt; if any.</source>
        <translation>Kontrollera beviset för pengar som skickats till &lt;adress&gt; i &lt;txid&gt; med kontrollsträngen &lt;meddelande&gt;, om den angivits.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2764"/>
        <source>Generate a signature proving that you generated &lt;txid&gt; using the spend secret key, optionally with a challenge string &lt;message&gt;.</source>
        <translation>Skapa en signatur som bevisar att du skapade &lt;txid&gt; genom att använda den hemliga spendernyckeln, valfritt med kontrollsträngen &lt;meddelande&gt;.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2768"/>
        <source>Check a signature proving that the signer generated &lt;txid&gt;, optionally with a challenge string &lt;message&gt;.</source>
        <translation>Kontrollera en signatur som bevisar att signeraren skapade &lt;txid&gt;, valfritt med kontrollsträngen &lt;meddelande&gt;.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2772"/>
        <source>Generate a signature proving that you own at least this much, optionally with a challenge string &lt;message&gt;.
If &apos;all&apos; is specified, you prove the entire sum of all of your existing accounts&apos; balances.
Otherwise, you prove the reserve of the smallest possible amount above &lt;amount&gt; available in your current account.</source>
        <translation>Skapa en signatur som bevisar att du äger åtminstone så här mycket, valfritt med kontrollsträngen &lt;meddelande&gt;.
Om &apos;all&apos; anges, bevisar du totalsumman av alla dina befintliga kontons saldo.
Annars bevisar du reserven för det minsta möjliga belopp över &lt;belopp&gt; som är tillgängligt på ditt aktuella konto.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2778"/>
        <source>Check a signature proving that the owner of &lt;address&gt; holds at least this much, optionally with a challenge string &lt;message&gt;.</source>
        <translation>Kontrollera en signatur som bevisar att ägaren till &lt;adress&gt; har åtminstone så här mycket, valfritt med kontrollsträngen &lt;meddelande&gt;.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2798"/>
        <source>Show the unspent outputs of a specified address within an optional amount range.</source>
        <translation>Visa de ej spenderade utgångarna hos en angiven adress inom ett valfritt beloppsintervall.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2802"/>
        <source>Rescan the blockchain from scratch. If &quot;hard&quot; is specified, you will lose any information which can not be recovered from the blockchain itself.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2806"/>
        <source>Set an arbitrary string note for a &lt;txid&gt;.</source>
        <translation>Ange en godtycklig stränganteckning för &lt;txid&gt;.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2810"/>
        <source>Get a string note for a txid.</source>
        <translation>Hämta en stränganteckning för ett txid.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2814"/>
        <source>Set an arbitrary description for the wallet.</source>
        <translation>Ange en godtycklig beskrivning av plånboken.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2818"/>
        <source>Get the description of the wallet.</source>
        <translation>Hämta plånbokens beskrivning.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2821"/>
        <source>Show the wallet&apos;s status.</source>
        <translation>Visa plånbokens status.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2824"/>
        <source>Show the wallet&apos;s information.</source>
        <translation>Visa information om plånboken.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2828"/>
        <source>Sign the contents of a file.</source>
        <translation>Signera innehållet i en fil.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2832"/>
        <source>Verify a signature on the contents of a file.</source>
        <translation>Verifiera en signatur av innehållet in en fil.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2840"/>
        <source>Import a signed key images list and verify their spent status.</source>
        <translation>Importera en signerad lista av nyckelavbildningar och verifiera deras spenderstatus.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2852"/>
        <source>Export a set of outputs owned by this wallet.</source>
        <translation>Exportera en uppsättning utgångar som ägs av denna plånbok.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2856"/>
        <source>Import a set of outputs owned by this wallet.</source>
        <translation>Importera en uppsättning utgångar som ägs av denna plånbok.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2860"/>
        <source>Show information about a transfer to/from this address.</source>
        <translation>Visa information om en transktion till/från denna adress.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2863"/>
        <source>Change the wallet&apos;s password.</source>
        <translation>Ändra plånbokens lösenord.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2870"/>
        <source>Print the information about the current fee and transaction backlog.</source>
        <translation>Skriv ut information om aktuell avgift och transaktionseftersläpning.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2872"/>
        <source>Export data needed to create a multisig wallet</source>
        <translation>Exportera data som krävs för att skapa en multisig-plånbok</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2875"/>
        <source>Turn this wallet into a multisig wallet</source>
        <translation>Gör denna plånbok till en multisig-plånbok</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2879"/>
        <source>Turn this wallet into a multisig wallet, extra step for N-1/N wallets</source>
        <translation>Gör denna plånbok till en multisig-plånbok, extra steg för plånböcker med N-1/N</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2887"/>
        <source>Export multisig info for other participants</source>
        <translation>Exportera multisig-info för andra deltagare</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2891"/>
        <source>Import multisig info from other participants</source>
        <translation>Importera multisig-info från andra deltagare</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2895"/>
        <source>Sign a multisig transaction from a file</source>
        <translation>Signera en a multisig-transaktion från en fil</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2899"/>
        <source>Submit a signed multisig transaction from a file</source>
        <translation>Skicka en signerad multisig-transaktion från en fil</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2903"/>
        <source>Export a signed multisig transaction to a file</source>
        <translation>Exportera en signerad multisig-transaktion till en fil</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3020"/>
        <source>Show the help section or the documentation about a &lt;command&gt;.</source>
        <translation>Visa hjälpavsnittet eller dokumentationen för &lt;kommando&gt;.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3103"/>
        <source>integer &gt;= </source>
        <translation>heltal &gt;= </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3116"/>
        <source>block height</source>
        <translation>blockhöjd</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3221"/>
        <source>No wallet found with that name. Confirm creation of new wallet named: </source>
        <translation>Ingen plånbok med det namnet kunde hittas. Bekräfta skapande av ny plånbok med namn: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3344"/>
        <source>can&apos;t specify both --restore-deterministic-wallet or --restore-multisig-wallet and --non-deterministic</source>
        <translation>det går inte att ange både --restore-deterministic-wallet eller --restore-multisig-wallet och --non-deterministic</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3350"/>
        <source>--restore-multisig-wallet uses --generate-new-wallet, not --wallet-file</source>
        <translation>--restore-multisig-wallet använder --generate-new-wallet, inte --wallet-file</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3366"/>
        <source>specify a recovery parameter with the --electrum-seed=&quot;multisig seed here&quot;</source>
        <translation>ange en återställningsparameter med --electrum-seed=&quot;startvärde för multisig&quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3395"/>
        <source>Multisig seed failed verification</source>
        <translation>Startvärde för multisig kunde inte verifieras</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3446"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3521"/>
        <source>This address is a subaddress which cannot be used here.</source>
        <translation>Denna adress är en underadress som inte kan användas här.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3598"/>
        <source>Error: expected M/N, but got: </source>
        <translation>Fel: förväntade M/N, men fick: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3603"/>
        <source>Error: expected N &gt; 1 and N &lt;= M, but got: </source>
        <translation>Fel: förväntade N &gt; 1 och N &lt;= M, men fick: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3608"/>
        <source>Error: M/N is currently unsupported. </source>
        <translation>Fel: M/N stöds för närvarande inte. </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3611"/>
        <source>Generating master wallet from %u of %u multisig wallet keys</source>
        <translation>Skapar huvudplånbok från %u av %u multisig-plånboksnycklar</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3640"/>
        <source>failed to parse secret view key</source>
        <translation>det gick inte att parsa hemlig granskningsnyckel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3648"/>
        <source>failed to verify secret view key</source>
        <translation>det gick inte att verifiera hemlig granskningsnyckel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3691"/>
        <source>Error: M/N is currently unsupported</source>
        <translation>Fel: M/N stöds för närvarande inte</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3854"/>
        <source>Restore height </source>
        <translation>Återställningshöjd </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3881"/>
        <source>Warning: using an untrusted daemon at %s, privacy will be lessened</source>
        <translation>Varning: använder en ej betrodd daemon på %s; sekretessen kommer att vara mindre</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3950"/>
        <source>Daemon either is not started or wrong port was passed. Please make sure daemon is running or change the daemon address using the &apos;set_daemon&apos; command.</source>
        <translation>Antingen har daemonen inte startat eller så angavs fel port. Se till att daemonen körs eller byt daemonadress med kommandot &apos;set_daemon&apos;.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3988"/>
        <source>Enter the number corresponding to the language of your choice</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4098"/>
        <source>Your wallet has been generated!
To start synchronizing with the daemon, use the &quot;refresh&quot; command.
Use the &quot;help&quot; command to see the list of available commands.
Use &quot;help &lt;command&gt;&quot; to see a command&apos;s documentation.
Always use the &quot;exit&quot; command when closing monero-wallet-cli to save 
your current session&apos;s state. Otherwise, you might need to synchronize 
your wallet again (your wallet keys are NOT at risk in any case).
</source>
        <translation>Din plånbok har skapats!
Använd kommandot &quot;refresh&quot; för att starta synkronisering med daemonen.
Använd kommandot &quot;help&quot; för att visa en lista över tillgängliga kommandon.
Använd &quot;help &lt;kommando&gt;&quot; för att visa dokumentation för kommandot.
Använd alltid kommandot &quot;exit&quot; när du stänger monero-wallet-cli så att ditt aktuella sessionstillstånd sparas. Annars kan du bli tvungen att synkronisera
din plånbok igen (din plånboks nycklar är dock INTE hotade i vilket fall som helst).
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4242"/>
        <source>failed to generate new mutlisig wallet</source>
        <translation>det gick inte att skapa ny multisig-plånbok</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4245"/>
        <source>Generated new %u/%u multisig wallet: </source>
        <translation>Skapa ny %u/%u-multisig-plånbok: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4294"/>
        <source>Opened %u/%u multisig wallet%s</source>
        <translation>Öppnade %u/%u-multisig-plånbok%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4355"/>
        <source>Use &quot;help &lt;command&gt;&quot; to see a command&apos;s documentation.
</source>
        <translation>Använd &quot;help &lt;kommando&gt;&quot; för att visa dokumentation för kommandot.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4413"/>
        <source>wallet is multisig and cannot save a watch-only version</source>
        <translation>plånboken är multisig och kan inte spara en granskningsversion</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4538"/>
        <source>Unexpected array length - Exited simple_wallet::set_daemon()</source>
        <translation>Oväntad matrislängd - Lämnade simple_wallet::set_daemon()</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4579"/>
        <source>This does not seem to be a valid daemon URL.</source>
        <translation>Detta verkar inte vara en giltig daemon-URL.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4615"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4648"/>
        <source>txid </source>
        <translation>txid </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4617"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4650"/>
        <source>idx </source>
        <translation>idx </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4630"/>
        <source>WARNING: this transaction uses an unencrypted payment ID: consider using subaddresses instead.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4630"/>
        <source>WARNING: this transaction uses an unencrypted payment ID: these are obsolete. Support will be withdrawn in the future. Use subaddresses instead.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4838"/>
        <source> (Some owned outputs have partial key images - import_multisig_info needed)</source>
        <translation> (Några ägda utgångar har partiella nyckelavbildningar - import_multisig_info krävs)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4841"/>
        <source>Currently selected account: [</source>
        <translation>Aktuellt valt konto: [</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4841"/>
        <source>] </source>
        <translation>] </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4843"/>
        <source>Tag: </source>
        <translation>Tagg: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4843"/>
        <source>(No tag assigned)</source>
        <translation>(Ingen tagg tilldelad)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4850"/>
        <source>Balance per address:</source>
        <translation>Saldo per adress:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4851"/>
        <source>Address</source>
        <translation>Adress</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4851"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8066"/>
        <source>Balance</source>
        <translation>Saldo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4851"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8066"/>
        <source>Unlocked balance</source>
        <translation>Upplåst saldo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4851"/>
        <source>Outputs</source>
        <translation>Utgångar</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4851"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8066"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9183"/>
        <source>Label</source>
        <translation>Etikett</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4859"/>
        <source>%8u %6s %21s %21s %7u %21s</source>
        <translation>%8u %6s %21s %21s %7u %21s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4952"/>
        <source>spent</source>
        <translation>spenderat</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4952"/>
        <source>global index</source>
        <translation>globalt index</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4952"/>
        <source>tx id</source>
        <translation>tx-ID</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4952"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5014"/>
        <source>addr index</source>
        <translation>addr index</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4982"/>
        <source>No incoming transfers</source>
        <translation>Inga inkommande överföringar</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4986"/>
        <source>No incoming available transfers</source>
        <translation>Inga inkommande tillgängliga överföringar</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4990"/>
        <source>No incoming unavailable transfers</source>
        <translation>Inga inkommande otillgängliga överföringar</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5014"/>
        <source>payment</source>
        <translation>betalning</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5014"/>
        <source>transaction</source>
        <translation>transaktion</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5014"/>
        <source>height</source>
        <translation>höjd</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5014"/>
        <source>unlock time</source>
        <translation>upplåsningstid</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5026"/>
        <source>No payments with id </source>
        <translation>Inga betalningar med ID </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5074"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5164"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5493"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5952"/>
        <source>failed to get blockchain height: </source>
        <translation>det gick inte att hämta blockkedjans höjd: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5172"/>
        <source>
Transaction %llu/%llu: txid=%s</source>
        <translation>
Transaktion %llu/%llu: txid=%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5193"/>
        <source>
Input %llu/%llu: amount=%s</source>
        <translation>
Ingång %llu/%llu: belopp=%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5209"/>
        <source>failed to get output: </source>
        <translation>det gick inte att hämta utgång: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5217"/>
        <source>output key&apos;s originating block height shouldn&apos;t be higher than the blockchain height</source>
        <translation>utgångsnyckelns ursprungsblockhöjd får inte vara högre än blockkedjans höjd</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5221"/>
        <source>
Originating block heights: </source>
        <translation>
Ursprungsblockhöjder: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5233"/>
        <source>
|</source>
        <translation>
|</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5233"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7763"/>
        <source>|
</source>
        <translation>|
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5250"/>
        <source>
Warning: Some input keys being spent are from </source>
        <translation>
Varning: Några ingångsnycklar som spenderas kommer från </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5252"/>
        <source>, which can break the anonymity of ring signature. Make sure this is intentional!</source>
        <translation>, vilket kan bryta ringsignaturens anonymitet. Se till att detta är avsiktligt!</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5292"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5904"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6197"/>
        <source>Ring size must not be 0</source>
        <translation>Ringstorlek för inte vara 0</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5304"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5916"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6209"/>
        <source>ring size %u is too small, minimum is %u</source>
        <translation>ringstorlek %uär för liten, minimum är %u</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5316"/>
        <source>wrong number of arguments</source>
        <translation>fel antal argument</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5509"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6057"/>
        <source>No outputs found, or daemon is not ready</source>
        <translation>Inga utgångar hittades, eller så är daemonen inte klar</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6466"/>
        <source>Failed to parse donation address: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6480"/>
        <source>Donating %s %s to The Monero Project (donate.getmonero.org or %s).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6482"/>
        <source>Donating %s %s to %s.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6812"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6823"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6830"/>
        <source>failed to parse tx_key</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6839"/>
        <source>Tx key successfully stored.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6843"/>
        <source>Failed to store tx key: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7349"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7575"/>
        <source>block</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7497"/>
        <source>usage: show_transfers [in|out|all|pending|failed|coinbase] [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;min_height&gt; [&lt;max_height&gt;]]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7550"/>
        <source>usage: export_transfers [in|out|all|pending|failed|coinbase] [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;min_height&gt; [&lt;max_height&gt;]] [output=&lt;path&gt;]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7575"/>
        <source>direction</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7575"/>
        <source>timestamp</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7575"/>
        <source>running balance</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7575"/>
        <source>hash</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7575"/>
        <source>payment ID</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7575"/>
        <source>fee</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7575"/>
        <source>destination</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7575"/>
        <source>index</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7575"/>
        <source>note</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7629"/>
        <source>CSV exported to </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7787"/>
        <source>Warning: this will lose any information which can not be recovered from the blockchain.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7788"/>
        <source>This includes destination addresses, tx secret keys, tx notes, etc</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7807"/>
        <source>MMS received new message</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8446"/>
        <source>Network type: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8447"/>
        <source>Testnet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8448"/>
        <source>Stagenet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8448"/>
        <source>Mainnet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8618"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8664"/>
        <source>command only supported by HW wallet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8623"/>
        <source>hw wallet does not support cold KI sync</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8635"/>
        <source>Please confirm the key image sync on the device</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8641"/>
        <source>Key images synchronized to height </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8644"/>
        <source>Running untrusted daemon, cannot determine which transaction output is spent. Use a trusted daemon with --trusted-daemon and run rescan_spent</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8647"/>
        <source> spent, </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8647"/>
        <source> unspent</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8651"/>
        <source>Failed to import key images</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8656"/>
        <source>Failed to import key images: </source>
        <translation type="unfinished">Det gick inte att importera nyckelavbildningar: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8673"/>
        <source>Failed to reconnect device</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8678"/>
        <source>Failed to reconnect device: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8942"/>
        <source>Transaction successfully saved to </source>
        <translation>Transaktionen sparades till </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8942"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8944"/>
        <source>, txid </source>
        <translation>, txid </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8944"/>
        <source>Failed to save transaction to </source>
        <translation>Det gick inte att spara transaktion till </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6664"/>
        <source>This is a watch only wallet</source>
        <translation>Detta är en granskningsplånbok</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8872"/>
        <source>Double spend seen on the network: this transaction may or may not end up being mined</source>
        <translation>En dubbelspendering upptäcktes på nätverket: denna transaktion kanske aldrig blir verifierad</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8907"/>
        <source>Transaction ID not found</source>
        <translation>Transaktions-ID kunde inte hittas</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="349"/>
        <source>true</source>
        <translation>sant</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="402"/>
        <source>failed to parse refresh type</source>
        <translation>det gick inte att parsa uppdateringstyp</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="734"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="800"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="954"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="999"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1082"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1139"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1206"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1272"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1366"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1482"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1563"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6654"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6718"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6755"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6852"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7063"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7147"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8456"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8533"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8576"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8689"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8729"/>
        <source>command not supported by HW wallet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="739"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="810"/>
        <source>wallet is watch-only and has no seed</source>
        <translation>plånboken är enbart för granskning och har inget startvärde</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="757"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="820"/>
        <source>wallet is non-deterministic and has no seed</source>
        <translation>plånboken är icke-deterministisk och har inget startvärde</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="764"/>
        <source>Enter optional seed offset passphrase, empty to see raw seed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="830"/>
        <source>Incorrect password</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="898"/>
        <source>Current fee is %s %s per %s</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1051"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1173"/>
        <source>Send this multisig info to all other participants, then use exchange_multisig_keys &lt;info1&gt; [&lt;info2&gt;...] with others&apos; multisig info</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1182"/>
        <source>Multisig wallet has been successfully created. Current wallet type: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1188"/>
        <source>Failed to perform multisig keys exchange: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1515"/>
        <source>Failed to load multisig transaction from MMS</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1647"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1804"/>
        <source>Invalid key image</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1653"/>
        <source>Invalid txid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1665"/>
        <source>Key image either not spent, or spent with mixin 0</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1680"/>
        <source>Failed to get key image ring: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1695"/>
        <source>File doesn&apos;t exist</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1717"/>
        <source>Invalid ring specification: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1725"/>
        <source>Invalid key image: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1730"/>
        <source>Invalid ring type, expected relative or abosolute: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1736"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1748"/>
        <source>Error reading line: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1759"/>
        <source>Invalid ring: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1768"/>
        <source>Invalid relative ring: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1780"/>
        <source>Invalid absolute ring: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1789"/>
        <source>Failed to set ring for key image: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1789"/>
        <source>Continuing.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1819"/>
        <source>Missing absolute or relative keyword</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1829"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1836"/>
        <source>invalid index: must be a strictly positive unsigned integer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1844"/>
        <source>invalid index: indices wrap</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1854"/>
        <source>invalid index: indices should be in strictly ascending order</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1861"/>
        <source>failed to set ring</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1906"/>
        <source>First line is not an amount</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1920"/>
        <source>Invalid output: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1930"/>
        <source>Bad argument: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1930"/>
        <source>should be &quot;add&quot;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1939"/>
        <source>Failed to open file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1945"/>
        <source>Invalid output key, and file doesn&apos;t exist</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1951"/>
        <source>Failed to mark output spent: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1968"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1995"/>
        <source>Invalid output</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1978"/>
        <source>Failed to mark output unspent: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2002"/>
        <source>Spent: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2004"/>
        <source>Not spent: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2008"/>
        <source>Failed to check whether output is spent: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2023"/>
        <source>Failed to save known rings: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2038"/>
        <source>Please confirm the transaction on the device</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2085"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2104"/>
        <source>wallet is watch-only and cannot transfer</source>
        <translation>plånboken är enbart för granskning och kan inte göra överföringar</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2122"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5632"/>
        <source>WARNING: this is a non default ring size, which may harm your privacy. Default is recommended.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2124"/>
        <source>WARNING: from v8, ring size will be fixed and this setting will be ignored.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2153"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2176"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2192"/>
        <source>priority must be either 0, 1, 2, 3, or 4, or one of: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2197"/>
        <source>could not change default priority</source>
        <translation>det gick inte att ändra standardinställning för prioritet</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2267"/>
        <source>invalid argument: must be either 0/never, 1/action, or 2/encrypt/decrypt</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2528"/>
        <source>Device name not specified</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2537"/>
        <source>Device reconnect failed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2542"/>
        <source>Device reconnect failed: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2601"/>
        <source>Show the incoming transfers, all or filtered by availability and address index.

Output format:
Amount, Spent(&quot;T&quot;|&quot;F&quot;), &quot;locked&quot;|&quot;unlocked&quot;, RingCT, Global Index, Transaction Hash, Address Index, [Public Key, Key Image] </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2613"/>
        <source>Transfer &lt;amount&gt; to &lt;address&gt;. If the parameter &quot;index=&lt;N1&gt;[,&lt;N2&gt;,...]&quot; is specified, the wallet uses outputs received by addresses of those indices. If omitted, the wallet randomly chooses address indices to be used. In any case, it tries its best not to combine outputs across multiple addresses. &lt;priority&gt; is the priority of the transaction. The higher the priority, the higher the transaction fee. Valid values in priority order (from lowest to highest) are: unimportant, normal, elevated, priority. If omitted, the default value (see the command &quot;set priority&quot;) is used. &lt;ring_size&gt; is the number of inputs to include for untraceability. Multiple payments can be made at once by adding URI_2 or &lt;address_2&gt; &lt;amount_2&gt; etcetera (before the payment ID, if it&apos;s included)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2617"/>
        <source>Transfer &lt;amount&gt; to &lt;address&gt; and lock it for &lt;lockblocks&gt; (max. 1000000). If the parameter &quot;index=&lt;N1&gt;[,&lt;N2&gt;,...]&quot; is specified, the wallet uses outputs received by addresses of those indices. If omitted, the wallet randomly chooses address indices to be used. In any case, it tries its best not to combine outputs across multiple addresses. &lt;priority&gt; is the priority of the transaction. The higher the priority, the higher the transaction fee. Valid values in priority order (from lowest to highest) are: unimportant, normal, elevated, priority. If omitted, the default value (see the command &quot;set priority&quot;) is used. &lt;ring_size&gt; is the number of inputs to include for untraceability. Multiple payments can be made at once by adding URI_2 or &lt;address_2&gt; &lt;amount_2&gt; etcetera (before the payment ID, if it&apos;s included)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2621"/>
        <source>Send all unlocked balance to an address and lock it for &lt;lockblocks&gt; (max. 1000000). If the parameter &quot;index&lt;N1&gt;[,&lt;N2&gt;,...]&quot; is specified, the wallet sweeps outputs received by those address indices. If omitted, the wallet randomly chooses an address index to be used. &lt;priority&gt; is the priority of the sweep. The higher the priority, the higher the transaction fee. Valid values in priority order (from lowest to highest) are: unimportant, normal, elevated, priority. If omitted, the default value (see the command &quot;set priority&quot;) is used. &lt;ring_size&gt; is the number of inputs to include for untraceability.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2627"/>
        <source>Send all unlocked balance to an address. If the parameter &quot;index&lt;N1&gt;[,&lt;N2&gt;,...]&quot; is specified, the wallet sweeps outputs received by those address indices. If omitted, the wallet randomly chooses an address index to be used. If the parameter &quot;outputs=&lt;N&gt;&quot; is specified and  N &gt; 0, wallet splits the transaction into N even outputs.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2643"/>
        <source>Sign a transaction from a file. If the parameter &quot;export_raw&quot; is specified, transaction raw hex data suitable for the daemon RPC /sendrawtransaction is exported.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2664"/>
        <source>If no arguments are specified or &lt;index&gt; is specified, the wallet shows the default or specified address. If &quot;all&quot; is specified, the wallet shows all the existing addresses in the currently selected account. If &quot;new &quot; is specified, the wallet creates a new address with the provided label text (which can be empty). If &quot;label&quot; is specified, the wallet sets the label of the address specified by &lt;index&gt; to the provided label text.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2691"/>
        <source>Available options:
 seed language
   Set the wallet&apos;s seed language.
 always-confirm-transfers &lt;1|0&gt;
   Whether to confirm unsplit txes.
 print-ring-members &lt;1|0&gt;
   Whether to print detailed information about ring members during confirmation.
 store-tx-info &lt;1|0&gt;
   Whether to store outgoing tx info (destination address, payment ID, tx secret key) for future reference.
 default-ring-size &lt;n&gt;
   Set the default ring size (obsolete).
 auto-refresh &lt;1|0&gt;
   Whether to automatically synchronize new blocks from the daemon.
 refresh-type &lt;full|optimize-coinbase|no-coinbase|default&gt;
   Set the wallet&apos;s refresh behaviour.
 priority [0|1|2|3|4]
   Set the fee to default/unimportant/normal/elevated/priority.
 confirm-missing-payment-id &lt;1|0&gt;
 ask-password &lt;0|1|2   (or never|action|decrypt)&gt;
 unit &lt;monero|millinero|micronero|nanonero|piconero&gt;
   Set the default monero (sub-)unit.
 min-outputs-count [n]
   Try to keep at least that many outputs of value at least min-outputs-value.
 min-outputs-value [n]
   Try to keep at least min-outputs-count outputs of at least that value.
 merge-destinations &lt;1|0&gt;
   Whether to merge multiple payments to the same destination address.
 confirm-backlog &lt;1|0&gt;
   Whether to warn if there is transaction backlog.
 confirm-backlog-threshold [n]
   Set a threshold for confirm-backlog to only warn if the transaction backlog is greater than n blocks.
 refresh-from-block-height [n]
   Set the height before which to ignore blocks.
 auto-low-priority &lt;1|0&gt;
   Whether to automatically use the low priority fee level when it&apos;s safe to do so.
 segregate-pre-fork-outputs &lt;1|0&gt;
   Set this if you intend to spend outputs on both Monero AND a key reusing fork.
 key-reuse-mitigation2 &lt;1|0&gt;
   Set this if you are not sure whether you will spend on a key reusing Monero fork later.
subaddress-lookahead &lt;major&gt;:&lt;minor&gt;
   Set the lookahead sizes for the subaddress hash table.
   Set this if you are not sure whether you will spend on a key reusing Monero fork later.
 segregation-height &lt;n&gt;
   Set to the height of a key reusing fork you want to use, 0 to use default.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2748"/>
        <source>Set the transaction key (r) for a given &lt;txid&gt; in case the tx was made by some other device or 3rd party wallet.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2783"/>
        <source>Show the incoming/outgoing transfers within an optional height range.

Output format:
In or Coinbase:    Block Number, &quot;block&quot;|&quot;in&quot;,              Time, Amount,  Transaction Hash, Payment ID, Subaddress Index,                     &quot;-&quot;, Note
Out:               Block Number, &quot;out&quot;,                     Time, Amount*, Transaction Hash, Payment ID, Fee, Destinations, Input addresses**, &quot;-&quot;, Note
Pool:                            &quot;pool&quot;, &quot;in&quot;,              Time, Amount,  Transaction Hash, Payment Id, Subaddress Index,                     &quot;-&quot;, Note, Double Spend Note
Pending or Failed:               &quot;failed&quot;|&quot;pending&quot;, &quot;out&quot;, Time, Amount*, Transaction Hash, Payment ID, Fee, Input addresses**,               &quot;-&quot;, Note

* Excluding change and fee.
** Set of address indices used as inputs in this transfer.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2793"/>
        <source>export_transfers [in|out|all|pending|failed|coinbase] [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;min_height&gt; [&lt;max_height&gt;]] [output=&lt;filepath&gt;]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2794"/>
        <source>Export to CSV the incoming/outgoing transfers within an optional height range.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2836"/>
        <source>Export a signed set of key images to a &lt;filename&gt;.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2844"/>
        <source>Synchronizes key images with the hw wallet.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2848"/>
        <source>Attempts to reconnect HW wallet.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2867"/>
        <source>Generate a new random full size payment id (obsolete). These will be unencrypted on the blockchain, see integrated_address for encrypted short payment ids.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2883"/>
        <source>Performs extra multisig keys exchange rounds. Needed for arbitrary M/N multisig wallets</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2907"/>
        <source>Interface with the MMS (Multisig Messaging System)
&lt;subcommand&gt; is one of:
  init, info, signer, list, next, sync, transfer, delete, send, receive, export, note, show, set, help
  send_signer_config, start_auto_config, stop_auto_config, auto_config
Get help about a subcommand with: help mms &lt;subcommand&gt;, or mms help &lt;subcommand&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2915"/>
        <source>Initialize and configure the MMS for M/N = number of required signers/number of authorized signers multisig</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2919"/>
        <source>Display current MMS configuration</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2923"/>
        <source>Set or modify authorized signer info (single-word label, transport address, Monero address), or list all signers</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2927"/>
        <source>List all messages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2931"/>
        <source>Evaluate the next possible multisig-related action(s) according to wallet state, and execute or offer for choice
By using &apos;sync&apos; processing of waiting messages with multisig sync info can be forced regardless of wallet state</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2936"/>
        <source>Force generation of multisig sync info regardless of wallet state, to recover from special situations like &quot;stale data&quot; errors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2940"/>
        <source>Initiate transfer with MMS support; arguments identical to normal &apos;transfer&apos; command arguments, for info see there</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2944"/>
        <source>Delete a single message by giving its id, or delete all messages by using &apos;all&apos;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2948"/>
        <source>Send a single message by giving its id, or send all waiting messages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2952"/>
        <source>Check right away for new messages to receive</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2956"/>
        <source>Write the content of a message to a file &quot;mms_message_content&quot;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2960"/>
        <source>Send a one-line message to an authorized signer, identified by its label, or show any waiting unread notes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2964"/>
        <source>Show detailed info about a single message</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2968"/>
        <source>Available options:
 auto-send &lt;1|0&gt;
   Whether to automatically send newly generated messages right away.
 </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2974"/>
        <source>Send completed signer config to all other authorized signers</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2978"/>
        <source>Start auto-config at the auto-config manager&apos;s wallet by issuing auto-config tokens and optionally set others&apos; labels</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2982"/>
        <source>Delete any auto-config tokens and abort a auto-config process</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2986"/>
        <source>Start auto-config by using the token received from the auto-config manager</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2990"/>
        <source>Print the ring(s) used to spend a given key image or transaction (if the ring size is &gt; 1)

Output format:
Key Image, &quot;absolute&quot;, list of rings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2996"/>
        <source>Set the ring used for a given key image, so it can be reused in a fork</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3000"/>
        <source>Save known rings to the shared rings database</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3004"/>
        <source>Mark output(s) as spent so they never get selected as fake outputs in a ring</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3008"/>
        <source>Marks an output as unspent so it may get selected as a fake output in a ring</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3012"/>
        <source>Checks whether an output is marked as spent</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3016"/>
        <source>Returns version information</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3105"/>
        <source>full (slowest, no assumptions); optimize-coinbase (fast, assumes the whole coinbase is paid to a single address); no-coinbase (fastest, assumes we receive no coinbase transaction), default (same as optimize-coinbase)</source>
        <translation>full (långsammast, inga antaganden); optimize-coinbase (snabb, antar att hela coinbase-transaktionen betalas till en enda adress); no-coinbase (snabbast, antar att ingen coinbase-transaktion tas emot), default (samma som optimize-coinbase)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3106"/>
        <source>0, 1, 2, 3, or 4, or one of </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3108"/>
        <source>0|1|2 (or never|action|decrypt)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3109"/>
        <source>monero, millinero, micronero, nanonero, piconero</source>
        <translation>monero, millinero, micronero, nanonero, piconero</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3120"/>
        <source>&lt;major&gt;:&lt;minor&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3124"/>
        <source>&lt;device_name[:device_spec]&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3145"/>
        <source>wrong number range, use: %s</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3184"/>
        <source>Wallet name not valid. Please try again or use Ctrl-C to quit.</source>
        <translation>Plånbokens namn ej giltigt. Försök igen eller använd Ctrl-C för att avsluta.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3201"/>
        <source>Wallet and key files found, loading...</source>
        <translation>Plånbok och nyckelfil hittades, läser in&#xa0;…</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3207"/>
        <source>Key file found but not wallet file. Regenerating...</source>
        <translation>Nyckelfilen hittades men inte plånboksfilen. Återskapar&#xa0;…</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3213"/>
        <source>Key file not found. Failed to open wallet: </source>
        <translation>Nyckelfilen kunde inte hittas. Det gick inte att öppna plånbok: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3232"/>
        <source>Generating new wallet...</source>
        <translation>Skapar ny plånbok&#xa0;…</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3250"/>
        <source>NOTE: the following %s can be used to recover access to your wallet. Write them down and store them somewhere safe and secure. Please do not store them in your email or on file storage services outside of your immediate control.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3252"/>
        <source>string</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3252"/>
        <source>25 words</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3313"/>
        <source>Can&apos;t specify more than one of --testnet and --stagenet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3325"/>
        <source>can&apos;t specify more than one of --generate-new-wallet=&quot;wallet_name&quot;, --wallet-file=&quot;wallet_name&quot;, --generate-from-view-key=&quot;wallet_name&quot;, --generate-from-spend-key=&quot;wallet_name&quot;, --generate-from-keys=&quot;wallet_name&quot;, --generate-from-multisig-keys=&quot;wallet_name&quot;, --generate-from-json=&quot;jsonfilename&quot; and --generate-from-device=&quot;wallet_name&quot;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3404"/>
        <source>Electrum-style word list failed verification</source>
        <translation>Det gick inte att verifiera ordlista av Electrum-typ</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3409"/>
        <source>Enter seed offset passphrase, empty if none</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3435"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3455"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3490"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3510"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3530"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3545"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3593"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3618"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3634"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3673"/>
        <source>No data supplied, cancelled</source>
        <translation>Inga data angivna, avbryter</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3441"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3516"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3624"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5420"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6010"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6281"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6871"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6939"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7003"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7207"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8251"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8513"/>
        <source>failed to parse address</source>
        <translation>det gick inte att parsa adressen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3461"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3551"/>
        <source>failed to parse view key secret key</source>
        <translation>det gick inte att parsa hemlig granskningsnyckel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3470"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3568"/>
        <source>failed to verify view key secret key</source>
        <translation>det gick inte att verifiera hemlig granskningsnyckel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3474"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3572"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3653"/>
        <source>view key does not match standard address</source>
        <translation>granskningsnyckel matchar inte standardadress</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3479"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3499"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3576"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3709"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3735"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3766"/>
        <source>account creation failed</source>
        <translation>det gick inte att skapa konto</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3495"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3536"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3678"/>
        <source>failed to parse spend key secret key</source>
        <translation>det gick inte att parsa spendernyckel hemlig nyckel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3560"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3698"/>
        <source>failed to verify spend key secret key</source>
        <translation>det gick inte att verifiera spendernyckel hemlig nyckel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3564"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3703"/>
        <source>spend key does not match standard address</source>
        <translation>spendernyckel matchar inte standardadress</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3668"/>
        <source>Secret spend key (%u of %u)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3741"/>
        <source>No restore height is specified.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3742"/>
        <source>Assumed you are creating a new account, restore will be done from current estimated blockchain height.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3747"/>
        <source>account creation aborted</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3868"/>
        <source>can&apos;t specify --subaddress-lookahead and --wallet-file at the same time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3872"/>
        <source>failed to open account</source>
        <translation>det gick inte att öppna konto</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3876"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4453"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4506"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4591"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6907"/>
        <source>wallet is null</source>
        <translation>plånbok är null</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3884"/>
        <source>Failed to initialize ring database: privacy enhancing features will be inactive</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3979"/>
        <source>If your display freezes, exit blind with ^C, then run again with --use-english-language-names</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3997"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4002"/>
        <source>invalid language choice entered. Please try again.
</source>
        <translation>ogiltigt språkval har angivits. Försök igen.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4081"/>
        <source>View key: </source>
        <translation>Granskningsnyckel: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4192"/>
        <source>Generated new wallet on hw device: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4271"/>
        <source>Key file not found. Failed to open wallet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4348"/>
        <source>You may want to remove the file &quot;%s&quot; and try again</source>
        <translation>Du kan också prova att bort filen &quot;%s&quot; och försöka igen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4376"/>
        <source>failed to deinitialize wallet</source>
        <translation>det gick inte att avinitiera plånboken</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4429"/>
        <source>Watch only wallet saved as: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4433"/>
        <source>Failed to save watch only wallet: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4444"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5082"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8581"/>
        <source>this command requires a trusted daemon. Enable with --trusted-daemon</source>
        <translation>detta kommando kräver en betrodd daemon. Aktivera med --trusted-daemon</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4560"/>
        <source>Expected trusted or untrusted, got </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4577"/>
        <source>trusted</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4577"/>
        <source>untrusted</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4601"/>
        <source>blockchain can&apos;t be saved: </source>
        <translation>blockkedjan kan inte sparas: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4666"/>
        <source>Password needed (%s) - use the refresh command</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4674"/>
        <source>Enter password</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4689"/>
        <source>Device requires attention</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4697"/>
        <source>Enter device PIN</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4699"/>
        <source>Failed to read device PIN</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4706"/>
        <source>Please enter the device passphrase on the device</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4713"/>
        <source>Enter device passphrase</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4715"/>
        <source>Failed to read device passphrase</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4731"/>
        <source>The first refresh has finished for the HW-based wallet with received money. hw_key_images_sync is needed. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4733"/>
        <source>Do you want to do it now? (Y/Yes/N/No): </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4735"/>
        <source>hw_key_images_sync skipped. Run command manually before a transfer.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4778"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5096"/>
        <source>daemon is busy. Please try again later.</source>
        <translation>daemonen är upptagen. Försök igen senare.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4782"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5100"/>
        <source>no connection to daemon. Please make sure daemon is running.</source>
        <translation>ingen anslutning till daemonen. Se till att daemonen körs.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4792"/>
        <source>refresh error: </source>
        <translation>fel vid uppdatering: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4840"/>
        <source> (Some owned outputs have missing key images - import_key_images needed)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4844"/>
        <source>Balance: </source>
        <translation>Saldo: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4913"/>
        <source>Invalid keyword: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4951"/>
        <source>pubkey</source>
        <translation>publik nyckel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4951"/>
        <source>key image</source>
        <translation>nyckelavbildning</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4952"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4968"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7575"/>
        <source>unlocked</source>
        <translation>upplåst</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4952"/>
        <source>ringct</source>
        <translation>ringct</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4962"/>
        <source>Heights: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4967"/>
        <source>T</source>
        <translation>S</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4967"/>
        <source>F</source>
        <translation>F</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4968"/>
        <source>locked</source>
        <translation>låst</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4969"/>
        <source>RingCT</source>
        <translation>RingCT</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4969"/>
        <source>-</source>
        <translation>-</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5048"/>
        <source>payment ID has invalid format, expected 16 or 64 character hex string: </source>
        <translation>betalnings-ID har ogiltigt format. En hexadecimal sträng med 16 eller 64 tecken förväntades: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5104"/>
        <source>failed to get spent status</source>
        <translation>det gick inte att hämta spenderstatus</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5188"/>
        <source>failed to find construction data for tx input</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5251"/>
        <source>the same transaction</source>
        <translation>samma transaktion</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5251"/>
        <source>blocks that are temporally very close</source>
        <translation>block som ligger väldigt nära varandra i tiden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5359"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5945"/>
        <source>Locked blocks too high, max 1000000 (˜4 yrs)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5468"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6037"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6306"/>
        <source>No payment id is included with this transaction. Is this okay?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5532"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5542"/>
        <source>Is this okay anyway?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5537"/>
        <source>There is currently a %u block backlog at that fee level. Is this okay?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5774"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6085"/>
        <source>Sweeping %s in %llu transactions for a total fee of %s.  Is this okay?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5780"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6091"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6348"/>
        <source>Sweeping %s for a total fee of %s.  Is this okay?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5827"/>
        <source>Discarding %s of unmixable outputs that cannot be spent, which can be undone by &quot;rescan_spent&quot;.  Is this okay?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6630"/>
        <source>Loaded %lu transactions, for %s, fee %s, %s, %s, with min ring size %lu, %s. %sIs this okay?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7789"/>
        <source>Rescan anyway?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8269"/>
        <source>Short payment IDs are to be used within an integrated address only</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9076"/>
        <source> (Y/Yes/N/No): </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9103"/>
        <source>Choose processing:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9112"/>
        <source>Sign tx</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9120"/>
        <source>Send the tx for submission to </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9124"/>
        <source>Send the tx for signing to </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9131"/>
        <source>Submit tx</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9134"/>
        <source>unknown</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9140"/>
        <source>Choice: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9152"/>
        <source>Wrong choice</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9159"/>
        <source>Id</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9159"/>
        <source>I/O</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9159"/>
        <source>Authorized Signer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9160"/>
        <source>Message Type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9160"/>
        <source>Height</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9160"/>
        <source>R</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9160"/>
        <source>Message State</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9160"/>
        <source>Since</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9177"/>
        <source> ago</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9183"/>
        <source>#</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9183"/>
        <source>Transport Address</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9184"/>
        <source>Auto-Config Token</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9184"/>
        <source>Monero Address</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9188"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9196"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9198"/>
        <source>&lt;not set&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9239"/>
        <source>Message </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9240"/>
        <source>In/out: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9242"/>
        <source>State: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9242"/>
        <source>%s since %s, %s ago</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9246"/>
        <source>Sent: Never</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9250"/>
        <source>Sent: %s, %s ago</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9253"/>
        <source>Authorized signer: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9254"/>
        <source>Content size: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9254"/>
        <source> bytes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9255"/>
        <source>Content: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9255"/>
        <source>(binary data)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9285"/>
        <source>Send these messages now?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9295"/>
        <source>Queued for sending.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9315"/>
        <source>Invalid message id</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9324"/>
        <source>usage: mms init &lt;required_signers&gt;/&lt;authorized_signers&gt; &lt;own_label&gt; &lt;own_transport_address&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9330"/>
        <source>The MMS is already initialized. Re-initialize by deleting all signer info and messages?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9345"/>
        <source>Error in the number of required signers and/or authorized signers</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9362"/>
        <source>The MMS is not active.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9385"/>
        <source>Invalid signer number </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9390"/>
        <source>mms signer [&lt;number&gt; &lt;label&gt; [&lt;transport_address&gt; [&lt;monero_address&gt;]]]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9409"/>
        <source>Invalid Monero address</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9416"/>
        <source>Wallet state does not allow changing Monero addresses anymore</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9428"/>
        <source>Usage: mms list</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9441"/>
        <source>Usage: mms next [sync]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9466"/>
        <source>No next step: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9476"/>
        <source>prepare_multisig</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9482"/>
        <source>make_multisig</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9497"/>
        <source>exchange_multisig_keys</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9512"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9632"/>
        <source>export_multisig_info</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9521"/>
        <source>import_multisig_info</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9534"/>
        <source>sign_multisig</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9544"/>
        <source>submit_multisig</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9554"/>
        <source>Send tx</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9565"/>
        <source>Process signer config</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9577"/>
        <source>Replace current signer config with the one displayed above?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9591"/>
        <source>Process auto config data</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9605"/>
        <source>Nothing ready to process</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9625"/>
        <source>Usage: mms sync</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9649"/>
        <source>Usage: mms delete (&lt;message_id&gt; | all)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9656"/>
        <source>Delete all messages?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9682"/>
        <source>Usage: mms send [&lt;message_id&gt;]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9699"/>
        <source>Usage: mms receive</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9716"/>
        <source>Usage: mms export &lt;message_id&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9728"/>
        <source>Message content saved to: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9732"/>
        <source>Failed to to save message content</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9756"/>
        <source>Usage: mms note [&lt;label&gt; &lt;text&gt;]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9763"/>
        <source>No signer found with label </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9785"/>
        <source>Usage: mms show &lt;message_id&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9804"/>
        <source>Usage: mms set &lt;option_name&gt; [&lt;option_value&gt;]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9821"/>
        <source>Wrong option value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9826"/>
        <source>Auto-send is on</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9826"/>
        <source>Auto-send is off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9831"/>
        <source>Unknown option</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9839"/>
        <source>Usage: mms help [&lt;subcommand&gt;]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9855"/>
        <source>Usage: mms send_signer_config</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9861"/>
        <source>Signer config not yet complete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9876"/>
        <source>Usage: mms start_auto_config [&lt;label&gt; &lt;label&gt; ...]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9881"/>
        <source>There are signers without a label set. Complete labels before auto-config or specify them as parameters here.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9887"/>
        <source>Auto-config is already running. Cancel and restart?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9911"/>
        <source>Usage: mms stop_auto_config</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9914"/>
        <source>Delete any auto-config tokens and stop auto-config?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9927"/>
        <source>Usage: mms auto_config &lt;auto_config_token&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9934"/>
        <source>Invalid auto-config token</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9940"/>
        <source>Auto-config already running. Cancel and restart?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9972"/>
        <source>The MMS is not active. Activate using the &quot;mms init&quot; command</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10049"/>
        <source>Invalid MMS subcommand</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10054"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10058"/>
        <source>Error in MMS command: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7022"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7132"/>
        <source>Good signature</source>
        <translation>Godkänd signatur</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7049"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7134"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7234"/>
        <source>Bad signature</source>
        <translation>Felaktig signatur</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8227"/>
        <source>Standard address: </source>
        <translation>Standardadress: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8232"/>
        <source>failed to parse payment ID or address</source>
        <translation>det gick inte att parsa betalnings-ID eller adress</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8274"/>
        <source>failed to parse payment ID</source>
        <translation>det gick inte att parsa betalnings-ID</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8292"/>
        <source>failed to parse index</source>
        <translation>det gick inte att parsa index</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8300"/>
        <source>Address book is empty.</source>
        <translation>Adressboken är tom.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8306"/>
        <source>Index: </source>
        <translation>Index: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8307"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8437"/>
        <source>Address: </source>
        <translation>Adress: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8308"/>
        <source>Payment ID: </source>
        <translation>Betalnings-ID: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8309"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8436"/>
        <source>Description: </source>
        <translation>Beskrivning: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8466"/>
        <source>wallet is watch-only and cannot sign</source>
        <translation>plånboken är enbart för granskning och kan inte signera</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1305"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8480"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8506"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8743"/>
        <source>failed to read file </source>
        <translation>det gick inte att läsa filen </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3743"/>
        <source>Use --restore-height or --restore-date if you want to restore an already setup account from a specific height.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3745"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3832"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5634"/>
        <source>Is this okay?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3855"/>
        <source>Still apply restore height?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7011"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7125"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7219"/>
        <source>failed to load signature file</source>
        <translation>det gick inte att läsa in signaturfil</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7073"/>
        <source>wallet is watch-only and cannot generate the proof</source>
        <translation>plånboken är enbart för granskning och kan inte skapa beviset</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7157"/>
        <source>The reserve proof can be generated only by a full wallet</source>
        <translation>Beviset på reserv kan endast skapas av en standardplånbok</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7212"/>
        <source>Address must not be a subaddress</source>
        <translation>Adressen får inte vara en underadress</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7230"/>
        <source>Good signature -- total: %s, spent: %s, unspent: %s</source>
        <translation>Godkänd signatur -- summa: %s, spenderat: %s, ej spenderat: %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7420"/>
        <source>[Double spend seen on the network: this transaction may or may not end up being mined] </source>
        <translation>[En dubbelspendering upptäcktes på nätverket: denna transaktion kanske aldrig blir verifierad] </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7698"/>
        <source>There is no unspent output in the specified address</source>
        <translation>Det finns ingen ej spenderad utgång i den angivna adressen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7857"/>
        <source> (no daemon)</source>
        <translation> (ingen daemon)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7859"/>
        <source> (out of sync)</source>
        <translation> (inte synkroniserad)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7910"/>
        <source>(Untitled account)</source>
        <translation>(Ej namngivet konto)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7923"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7941"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7966"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7989"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8135"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8158"/>
        <source>failed to parse index: </source>
        <translation>det gick inte att parsa index: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7928"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8140"/>
        <source>specify an index between 0 and </source>
        <translation>ange ett index mellan 0 och </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8046"/>
        <source>
Grand total:
  Balance: </source>
        <translation>
Totalsumma:
  Saldo: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8046"/>
        <source>, unlocked balance: </source>
        <translation>, upplåst saldo: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8054"/>
        <source>Untagged accounts:</source>
        <translation>Otaggade konton:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8060"/>
        <source>Tag %s is unregistered.</source>
        <translation>Taggen %s har inte registrerats.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8063"/>
        <source>Accounts with tag: </source>
        <translation>Konton med tagg: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8064"/>
        <source>Tag&apos;s description: </source>
        <translation>Taggens beskrivning: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8066"/>
        <source>Account</source>
        <translation>Konto</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8072"/>
        <source> %c%8u %6s %21s %21s %21s</source>
        <translation> %c%8u %6s %21s %21s %21s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8082"/>
        <source>----------------------------------------------------------------------------------</source>
        <translation>----------------------------------------------------------------------------------</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8083"/>
        <source>%15s %21s %21s</source>
        <translation>%15s %21s %21s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8106"/>
        <source>Primary address</source>
        <translation>Primär adress</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8106"/>
        <source>(used)</source>
        <translation>(används)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8127"/>
        <source>(Untitled address)</source>
        <translation>(Ej namngiven adress)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8167"/>
        <source>&lt;index_min&gt; is already out of bound</source>
        <translation>&lt;index_min&gt; är redan utanför tillåtet intervall</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8172"/>
        <source>&lt;index_max&gt; exceeds the bound</source>
        <translation>&lt;index_max&gt; är utanför tillåtet intervall</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8198"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8210"/>
        <source>Integrated addresses can only be created for account 0</source>
        <translation>Integrerade adresser kan bara skapas för konto 0</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8222"/>
        <source>Integrated address: %s, payment ID: %s</source>
        <translation>Integrerad adress: %s, betalnings-ID: %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8227"/>
        <source>Subaddress: </source>
        <translation>Underadress: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8394"/>
        <source>no description found</source>
        <translation>ingen beskrivning hittades</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8396"/>
        <source>description found: </source>
        <translation>beskrivning hittades: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8435"/>
        <source>Filename: </source>
        <translation>Filnamn: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8440"/>
        <source>Watch only</source>
        <translation>Endast granskning</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8442"/>
        <source>%u/%u multisig%s</source>
        <translation>%u/%u multisig%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8444"/>
        <source>Normal</source>
        <translation>Normal</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8445"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9241"/>
        <source>Type: </source>
        <translation>Typ: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8471"/>
        <source>This wallet is multisig and cannot sign</source>
        <translation>Plånboken är multisig och kan inte signera</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8520"/>
        <source>Bad signature from </source>
        <translation>Felaktig signatur från </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8524"/>
        <source>Good signature from </source>
        <translation>Godkänd signatur från </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8543"/>
        <source>wallet is watch-only and cannot export key images</source>
        <translation>plånboken är enbart för granskning och kan inte exportera nyckelavbildningar</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1244"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8557"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8710"/>
        <source>failed to save file </source>
        <translation>det gick inte att spara fil </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8568"/>
        <source>Signed key images exported to </source>
        <translation>Signerade nyckelavbildningar exporterades till </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8721"/>
        <source>Outputs exported to </source>
        <translation>Utgångar exporterades till </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5402"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6455"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7168"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7657"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7665"/>
        <source>amount is wrong: </source>
        <translation>beloppet är fel: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5403"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6455"/>
        <source>expected number from 0 to </source>
        <translation>förväntades: ett tal från 0 till </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5772"/>
        <source>Sweeping </source>
        <translation>Sveper upp </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6388"/>
        <source>Money successfully sent, transaction: </source>
        <translation>Pengar skickades, transaktion: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6583"/>
        <source>Change goes to more than one address</source>
        <translation>Växel går till fler än en adress</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6624"/>
        <source>%s change to %s</source>
        <translation>%s växel till %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6627"/>
        <source>no change</source>
        <translation>ingen växel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1451"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1464"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6699"/>
        <source>Transaction successfully signed to file </source>
        <translation>Transaktionen signerades till fil </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6766"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6802"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6864"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6913"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6995"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7080"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7115"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8326"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8354"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8773"/>
        <source>failed to parse txid</source>
        <translation>det gick inte att parsa txid</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6780"/>
        <source>Tx key: </source>
        <translation>Tx-nyckel: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6785"/>
        <source>no tx keys found for this txid</source>
        <translation>inga tx-nycklar kunde hittas för detta txid</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6882"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7094"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7183"/>
        <source>signature file saved to: </source>
        <translation>signaturfilen sparades till: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6884"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7096"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7185"/>
        <source>failed to save signature file</source>
        <translation>det gick inte att spara signaturfilen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6921"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6930"/>
        <source>failed to parse tx key</source>
        <translation>det gick inte att parsa txnyckel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6888"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6976"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7054"/>
        <source>error: </source>
        <translation>fel: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6952"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7025"/>
        <source>received</source>
        <translation>mottaget</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6952"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7025"/>
        <source>in txid</source>
        <translation>i txid</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6971"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7044"/>
        <source>received nothing in txid</source>
        <translation>tog emot ingenting i txid</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6955"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7028"/>
        <source>WARNING: this transaction is not yet included in the blockchain!</source>
        <translation>VARNING: denna transaktion är ännu inte inkluderad i blockkedjan!</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6961"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7034"/>
        <source>This transaction has %u confirmations</source>
        <translation>Denna transaktion har %u bekräftelser</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6965"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7038"/>
        <source>WARNING: failed to determine number of confirmations!</source>
        <translation>VARNING: det gick inte att bestämma antal bekräftelser!</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7319"/>
        <source>bad min_height parameter:</source>
        <translation>felaktig parameter för min_höjd:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7331"/>
        <source>bad max_height parameter:</source>
        <translation>felaktig parameter för max_höjd:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7349"/>
        <source>in</source>
        <translation>in</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7672"/>
        <source>&lt;min_amount&gt; should be smaller than &lt;max_amount&gt;</source>
        <translation>&lt;min_belopp&gt; måste vara mindre än &lt;max_belopp&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7704"/>
        <source>
Amount: </source>
        <translation>
Belopp: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7704"/>
        <source>, number of keys: </source>
        <translation>, antal nycklar: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7709"/>
        <source> </source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7714"/>
        <source>
Min block height: </source>
        <translation>
Minblockhöjd: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7715"/>
        <source>
Max block height: </source>
        <translation>
Maxblockhöjd: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7716"/>
        <source>
Min amount found: </source>
        <translation>
Minbelopp funnet: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7717"/>
        <source>
Max amount found: </source>
        <translation>
Maxbelopp funnet: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7718"/>
        <source>
Total count: </source>
        <translation>
Totalt antal: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7758"/>
        <source>
Bin size: </source>
        <translation>
Storlek för binge: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7759"/>
        <source>
Outputs per *: </source>
        <translation>
Utgångar per *: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7761"/>
        <source>count
  ^
</source>
        <translation>antal
  ^
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7763"/>
        <source>  |</source>
        <translation>  |</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7765"/>
        <source>  +</source>
        <translation>  +</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7765"/>
        <source>+--&gt; block height
</source>
        <translation>+--&gt; blockhöjd
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7766"/>
        <source>   ^</source>
        <translation>   ^</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7766"/>
        <source>^
</source>
        <translation>^
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7767"/>
        <source>  </source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7855"/>
        <source>wallet</source>
        <translation>plånbok</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="885"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8202"/>
        <source>Random payment ID: </source>
        <translation>Slumpmässigt betalnings-ID: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8203"/>
        <source>Matching integrated address: </source>
        <translation>Matchande integrerad adress: </translation>
    </message>
</context>
<context>
    <name>genms</name>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="70"/>
        <source>Base filename (-1, -2, etc suffixes will be appended as needed)</source>
        <translation>Basfilnamn (suffix -1, -2, osv. läggs till efter behov)</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="71"/>
        <source>Give threshold and participants at once as M/N</source>
        <translation>Ange tröskelvärde och deltagare på en gång som M/N</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="73"/>
        <source>How many signers are required to sign a valid transaction</source>
        <translation>Hur många signerare krävs för att signera en giltig transaktion</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="74"/>
        <source>Create testnet multisig wallets</source>
        <translation>Skapa multisig-plånböcker för testnet</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="83"/>
        <source>Generating %u %u/%u multisig wallets</source>
        <translation>Skapar %u %u/%u multisig-plånböcker</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="142"/>
        <source>Error verifying multisig extra info</source>
        <translation>Ett fel uppstod när extra multisig-info verifierades</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="72"/>
        <source>How many participants will share parts of the multisig wallet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="75"/>
        <source>Create stagenet multisig wallets</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="76"/>
        <source>Create an address file for new wallets</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="107"/>
        <source>Failed to verify multisig info</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="153"/>
        <source>Generated multisig wallets for address </source>
        <translation>Skapade multisig-plånböcker för adress </translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="157"/>
        <source>Error creating multisig wallets: </source>
        <translation>Ett fel uppstod när multisig-plånböcker skapades: </translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="182"/>
        <source>This program generates a set of multisig wallets - use this simpler scheme only if all the participants trust each other</source>
        <translation>Programmet skapar en uppsättning multisig-plånböcker - använd endast detta enklare system om alla deltagare litar på varandra</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="201"/>
        <source>Error: Can&apos;t specify more than one of --testnet and --stagenet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="208"/>
        <source>Error: expected N/M, but got: </source>
        <translation>Fel: förväntade N/M, men fick: </translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="216"/>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="225"/>
        <source>Error: either --scheme or both of --threshold and --participants may be given</source>
        <translation>Fel: antingen --scheme eller både --threshold och --participants får anges</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="232"/>
        <source>Error: expected N &gt; 1 and N &lt;= M, but got N==%u and M==%d</source>
        <translation>Fel: förväntade N &gt; 1 och N &lt;= M, men fick N=%u och M=%d</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="241"/>
        <source>Error: --filename-base is required</source>
        <translation>Fel: --filename-base måste anges</translation>
    </message>
</context>
<context>
    <name>mms::message_store</name>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="69"/>
        <source>Use PyBitmessage instance at URL &lt;arg&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="70"/>
        <source>Specify &lt;arg&gt; as username:password for PyBitmessage API</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="832"/>
        <source>Auto-config cannot proceed because auto config data from other signers is not complete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="857"/>
        <source>The signer config is not complete.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="909"/>
        <source>Wallet can&apos;t go multisig because key sets from other signers are missing or not complete.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="951"/>
        <source>Wallet can&apos;t start another key exchange round because key sets from other signers are missing or not complete.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1015"/>
        <source>Syncing not done because multisig sync data from other signers are missing or not complete.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1129"/>
        <source>There are waiting messages, but nothing is ready to process under normal circumstances</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1132"/>
        <source>
Use &quot;mms next sync&quot; if you want to force processing of the waiting sync data</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1136"/>
        <source>
Use &quot;mms note&quot; to display the waiting notes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1141"/>
        <source>There are no messages waiting to be processed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1359"/>
        <source>key set</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1361"/>
        <source>additional key set</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1363"/>
        <source>multisig sync data</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1365"/>
        <source>partially signed tx</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1367"/>
        <source>fully signed tx</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1369"/>
        <source>note</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1371"/>
        <source>signer config</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1373"/>
        <source>auto-config data</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1375"/>
        <source>unknown message type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1384"/>
        <source>in</source>
        <translation type="unfinished">in</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1386"/>
        <source>out</source>
        <translation type="unfinished">ut</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1388"/>
        <source>unknown message direction</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1397"/>
        <source>ready to send</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1399"/>
        <source>sent</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1401"/>
        <source>waiting</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1403"/>
        <source>processed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1405"/>
        <source>cancelled</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1407"/>
        <source>unknown message state</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>sw</name>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="133"/>
        <source>Generate new wallet and save it to &lt;arg&gt;</source>
        <translation>Skapa ny plånbok och spara den till &lt;arg&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="134"/>
        <source>Generate new wallet from device and save it to &lt;arg&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="135"/>
        <source>Generate incoming-only wallet from view key</source>
        <translation>Skapa granskningsplånbok från granskningsnyckel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="136"/>
        <source>Generate deterministic wallet from spend key</source>
        <translation>Skapa deterministisk plånbok från spendernyckel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="137"/>
        <source>Generate wallet from private keys</source>
        <translation>Skapa plånbok från privata nycklar</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="138"/>
        <source>Generate a master wallet from multisig wallet keys</source>
        <translation>Skapa en huvudplånbok från multisig-plånboksnycklar</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="140"/>
        <source>Language for mnemonic</source>
        <translation>Språk för minnesbaserat startvärde</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="141"/>
        <source>Specify Electrum seed for wallet recovery/creation</source>
        <translation>Ange Electrum-startvärde för att återställa/skapa plånbok</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="142"/>
        <source>Recover wallet using Electrum-style mnemonic seed</source>
        <translation>Återställ plånbok genom att använda minnesbaserat startvärde (Electrum-typ)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="143"/>
        <source>Recover multisig wallet using Electrum-style mnemonic seed</source>
        <translation>Återställ multisig-plånbok genom att använda minnesbaserat startvärde (Electrum-typ)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="144"/>
        <source>Generate non-deterministic view and spend keys</source>
        <translation>Skapa icke-deterministisk granskningsnyckel och spendernyckel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="147"/>
        <source>Restore from estimated blockchain height on specified date</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="152"/>
        <source>Support obsolete long (unencrypted) payment ids</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="374"/>
        <source>invalid argument: must be either 0/1, true/false, y/n, yes/no</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="430"/>
        <source>DNSSEC validation passed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="434"/>
        <source>WARNING: DNSSEC validation was unsuccessful, this address may not be correct!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="437"/>
        <source>For URL: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="439"/>
        <source> Monero Address = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="451"/>
        <source>you have cancelled the transfer request</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="472"/>
        <source>failed to parse index: </source>
        <translation type="unfinished">det gick inte att parsa index: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="485"/>
        <source>invalid format for subaddress lookahead; must be &lt;major&gt;:&lt;minor&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="502"/>
        <source>no connection to daemon. Please make sure daemon is running.</source>
        <translation type="unfinished">ingen anslutning till daemonen. Se till att daemonen körs.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="507"/>
        <source>RPC error: </source>
        <translation type="unfinished">RPC-fel: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="511"/>
        <source>failed to get random outputs to mix: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="518"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="526"/>
        <source>Not enough money in unlocked balance</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="536"/>
        <source>Failed to find a way to create transactions. This is usually due to dust which is so small it cannot pay for itself in fees, or trying to send more money than the unlocked balance, or not leaving enough for fees</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="542"/>
        <source>not enough outputs for specified ring size</source>
        <translation type="unfinished">inte tillräckligt med utgångar för angiven ringstorlek</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="545"/>
        <source>output amount</source>
        <translation type="unfinished">utgångens belopp</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="545"/>
        <source>found outputs to use</source>
        <translation type="unfinished">hittade utgångar att använda</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="547"/>
        <source>Please use sweep_unmixable.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="551"/>
        <source>transaction was not constructed</source>
        <translation type="unfinished">transaktionen konstruerades inte</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="559"/>
        <source>Reason: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="568"/>
        <source>one of destinations is zero</source>
        <translation type="unfinished">ett av målen är noll</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="573"/>
        <source>failed to find a suitable way to split transactions</source>
        <translation type="unfinished">det gick inte att hitta ett lämpligt sätt att dela upp transaktioner</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="579"/>
        <source>unknown transfer error: </source>
        <translation type="unfinished">okänt överföringsfel: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="584"/>
        <source>Multisig error: </source>
        <translation type="unfinished">Multisig-fel: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="590"/>
        <source>internal error: </source>
        <translation type="unfinished">internt fel: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="595"/>
        <source>unexpected error: </source>
        <translation type="unfinished">oväntat fel: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="599"/>
        <source>There was an error, which could mean the node may be trying to get you to retry creating a transaction, and zero in on which outputs you own. Or it could be a bona fide error. It may be prudent to disconnect from this node, and not try to send a transaction immediately. Alternatively, connect to another node so the original node cannot correlate information.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="609"/>
        <source>File %s likely stores wallet private keys! Use a different file name.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7248"/>
        <source> seconds</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7250"/>
        <source> minutes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7252"/>
        <source> hours</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7254"/>
        <source> days</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7256"/>
        <source> months</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7257"/>
        <source>a long time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9001"/>
        <source>This is the command line monero wallet. It needs to connect to a monero
daemon to work correctly.
WARNING: Do not reuse your Monero keys on another fork, UNLESS this fork has key reuse mitigations built in. Doing so will harm your privacy.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9026"/>
        <source>Unknown command: </source>
        <translation type="unfinished">Okänt kommando: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="145"/>
        <source>Allow communicating with a daemon that uses a different RPC version</source>
        <translation>Tillåt kommunikation med en daemon som använder en annan version av RPC</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="146"/>
        <source>Restore from specific blockchain height</source>
        <translation>Återställ från angiven blockkedjehöjd</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="148"/>
        <source>The newly created transaction will not be relayed to the monero network</source>
        <translation>Den nyss skapade transaktionen kommer inte att skickas vidare till monero-nätverket</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="149"/>
        <source>Create an address file for new wallets</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="151"/>
        <source>Display English language names</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="289"/>
        <source>failed to read wallet password</source>
        <translation type="unfinished">det gick inte att läsa lösenord för plånboken</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="296"/>
        <source>Enter a new password for the wallet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="296"/>
        <source>Wallet password</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="306"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="498"/>
        <source>daemon is busy. Please try again later.</source>
        <translation>daemonen är upptagen. Försök igen senare.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="315"/>
        <source>possibly lost connection to daemon</source>
        <translation>anslutning till daemonen kan ha förlorats</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="332"/>
        <source>Error: </source>
        <translation>Fel: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="441"/>
        <source>Is this OK?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="556"/>
        <source>transaction %s was rejected by daemon</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="612"/>
        <source>File %s already exists. Are you sure to overwrite it?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9020"/>
        <source>Failed to initialize wallet</source>
        <translation>Det gick inte att initiera plånbok</translation>
    </message>
</context>
<context>
    <name>tools::wallet2</name>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="232"/>
        <source>Use daemon instance at &lt;host&gt;:&lt;port&gt;</source>
        <translation>Använd daemonen på &lt;värddator&gt;:&lt;port&gt;</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="233"/>
        <source>Use daemon instance at host &lt;arg&gt; instead of localhost</source>
        <translation>Använd daemonen på värddatorn &lt;arg&gt; istället för localhost</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="237"/>
        <source>Wallet password file</source>
        <translation>Lösenordsfil för plånboken</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="238"/>
        <source>Use daemon instance at port &lt;arg&gt; instead of 18081</source>
        <translation>Använd daemonen på port &lt;arg&gt; istället för 18081</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="240"/>
        <source>For testnet. Daemon must also be launched with --testnet flag</source>
        <translation>För testnet. Daemonen måste också startas med flaggan --testnet</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="313"/>
        <source>can&apos;t specify daemon host or port more than once</source>
        <translation>det går inte ange värd eller port för daemonen mer än en gång</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="386"/>
        <source>can&apos;t specify more than one of --password and --password-file</source>
        <translation>det går inte att ange fler än en av --password och --password-file</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="399"/>
        <source>the password file specified could not be read</source>
        <translation>det gick inte att läsa angiven lösenordsfil</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="425"/>
        <source>Failed to load file </source>
        <translation>Det gick inte att läsa in fil </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="236"/>
        <source>Wallet password (escape/quote as needed)</source>
        <translation>Lösenord för plånboken (använd escape-sekvenser eller citattecken efter behov)</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="234"/>
        <source>Enable commands which rely on a trusted daemon</source>
        <translation type="unfinished">Aktivera kommandon som kräver en betrodd daemon</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="235"/>
        <source>Disable commands which rely on a trusted daemon</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="239"/>
        <source>Specify username[:password] for daemon RPC client</source>
        <translation>Ange användarnamn[:lösenord] för RPC-klient till daemonen</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="241"/>
        <source>For stagenet. Daemon must also be launched with --stagenet flag</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="243"/>
        <source>Set shared ring database path</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="254"/>
        <source>Number of rounds for the key derivation function</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="255"/>
        <source>HW device to use</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="256"/>
        <source>HW device wallet derivation path (e.g., SLIP-10)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="344"/>
        <source>--trusted-daemon and --untrusted-daemon are both seen, assuming untrusted</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="354"/>
        <source>Daemon is local, assuming trusted</source>
        <translation type="unfinished">Daemonen är lokal, utgår från att den är betrodd</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="406"/>
        <source>no password specified; use --prompt-for-password to prompt for a password</source>
        <translation>inget lösenord har angivits; använd --prompt-for-password för att fråga efter lösenord</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="408"/>
        <source>Enter a new password for the wallet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="408"/>
        <source>Wallet password</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="431"/>
        <source>Failed to parse JSON</source>
        <translation>Det gick inte att parsa JSON</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="438"/>
        <source>Version %u too new, we can only grok up to %u</source>
        <translation>Version %u är för ny, vi förstår bara upp till %u</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="454"/>
        <source>failed to parse view key secret key</source>
        <translation>det gick inte att parsa hemlig granskningsnyckel</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="459"/>
        <location filename="../src/wallet/wallet2.cpp" line="527"/>
        <location filename="../src/wallet/wallet2.cpp" line="570"/>
        <source>failed to verify view key secret key</source>
        <translation>det gick inte att verifiera hemlig granskningsnyckel</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="470"/>
        <source>failed to parse spend key secret key</source>
        <translation>det gick inte att parsa spendernyckel hemlig nyckel</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="475"/>
        <location filename="../src/wallet/wallet2.cpp" line="537"/>
        <location filename="../src/wallet/wallet2.cpp" line="596"/>
        <source>failed to verify spend key secret key</source>
        <translation>det gick inte att verifiera spendernyckel hemlig nyckel</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="487"/>
        <source>Electrum-style word list failed verification</source>
        <translation>Det gick inte att verifiera ordlista av Electrum-typ</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="507"/>
        <source>At least one of either an Electrum-style word list, private view key, or private spend key must be specified</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="511"/>
        <source>Both Electrum-style word list and private key(s) specified</source>
        <translation>Både ordlista av Electrum-typ och privat nyckel har angivits</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="521"/>
        <source>invalid address</source>
        <translation>ogiltig adress</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="530"/>
        <source>view key does not match standard address</source>
        <translation>granskningsnyckel matchar inte standardadress</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="540"/>
        <source>spend key does not match standard address</source>
        <translation>spendernyckel matchar inte standardadress</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="548"/>
        <source>Cannot generate deprecated wallets from JSON</source>
        <translation>Det går inte att skapa inaktuella plånböcker från JSON</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="582"/>
        <source>failed to parse address: </source>
        <translation>det gick inte att parsa adressen: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="588"/>
        <source>Address must be specified in order to create watch-only wallet</source>
        <translation>Adress måste anges för att kunna skapa granskningsplånbok</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="605"/>
        <source>failed to generate new wallet: </source>
        <translation>det gick inte att skapa ny plånbok: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="1441"/>
        <source>Password is needed to compute key image for incoming monero</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="1442"/>
        <source>Invalid password: password is needed to compute key image for incoming monero</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="3857"/>
        <location filename="../src/wallet/wallet2.cpp" line="4461"/>
        <location filename="../src/wallet/wallet2.cpp" line="5030"/>
        <source>Primary account</source>
        <translation>Primärt konto</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="10336"/>
        <source>No funds received in this tx.</source>
        <translation>Inga pengar togs emot i denna tx.</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="11087"/>
        <source>failed to read file </source>
        <translation>det gick inte att läsa filen </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="150"/>
        <source>Set subaddress lookahead sizes to &lt;major&gt;:&lt;minor&gt;</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>tools::wallet_rpc_server</name>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="180"/>
        <source>Failed to create directory </source>
        <translation>Det gick inte att skapa mapp </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="182"/>
        <source>Failed to create directory %s: %s</source>
        <translation>Det gick inte att skapa mapp %s: %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="193"/>
        <source>Cannot specify --</source>
        <translation>Det går inte att ange --</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="193"/>
        <source> and --</source>
        <translation> och --</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="212"/>
        <source>Failed to create file </source>
        <translation>Det gick inte att skapa fil </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="212"/>
        <source>. Check permissions or remove file</source>
        <translation>. Kontrollera behörigheter eller ta bort filen</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="222"/>
        <source>Error writing to file </source>
        <translation>Ett fel uppstod vid skrivning till fil </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="225"/>
        <source>RPC username/password is stored in file </source>
        <translation>Användarnamn/lösenord för RPC har sparats i fil </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="479"/>
        <source>Tag %s is unregistered.</source>
        <translation>Taggen %s har inte registrerats.</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3083"/>
        <source>Transaction not possible. Available only %s, transaction amount %s = %s + %s (fee)</source>
        <translation>Transaktion är inte möjlig. Endast tillgängligt %s, transaktionsbelopp %s = %s + %s (avgift)</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3949"/>
        <source>This is the RPC monero wallet. It needs to connect to a monero
daemon to work correctly.</source>
        <translation>Detta är RPC-plånboken för monero. Den måste ansluta till en Monero-
daemon för att fungera korrekt.</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3790"/>
        <source>Can&apos;t specify more than one of --wallet-file and --generate-from-json</source>
        <translation>Det går inte att ange fler än en av --wallet-file och --generate-from-json</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3775"/>
        <source>Can&apos;t specify more than one of --testnet and --stagenet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3802"/>
        <source>Must specify --wallet-file or --generate-from-json or --wallet-dir</source>
        <translation>Måste ange --wallet-file eller --generate-from-json eller --wallet-dir</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3806"/>
        <source>Loading wallet...</source>
        <translation>Läser in plånbok&#xa0;…</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3840"/>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3872"/>
        <source>Saving wallet...</source>
        <translation>Sparar plånbok&#xa0;…</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3842"/>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3874"/>
        <source>Successfully saved</source>
        <translation>Plånboken sparades</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3845"/>
        <source>Successfully loaded</source>
        <translation>Plånboken lästes in</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3849"/>
        <source>Wallet initialization failed: </source>
        <translation>Det gick inte att initiera plånbok: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3855"/>
        <source>Failed to initialize wallet RPC server</source>
        <translation>Det gick inte att initiera RPC-servern för plånbok</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3859"/>
        <source>Starting wallet RPC server</source>
        <translation>Startar RPC-server för plånboken</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3866"/>
        <source>Failed to run wallet: </source>
        <translation>Det gick inte att köra plånboken: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3869"/>
        <source>Stopped wallet RPC server</source>
        <translation>Stoppade RPC-server för plånboken</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3878"/>
        <source>Failed to save wallet: </source>
        <translation>Det gick inte spara plånboken: </translation>
    </message>
</context>
<context>
    <name>wallet_args</name>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="168"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8967"/>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3930"/>
        <source>Wallet options</source>
        <translation>Alternativ för plånbok</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="73"/>
        <source>Generate wallet from JSON format file</source>
        <translation>Skapa plånbok från fil i JSON-format</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="77"/>
        <source>Use wallet &lt;arg&gt;</source>
        <translation>Använd plånbok &lt;arg&gt;</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="105"/>
        <source>Max number of threads to use for a parallel job</source>
        <translation>Max antal trådar att använda för ett parallellt jobb</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="106"/>
        <source>Specify log file</source>
        <translation>Ange loggfil</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="107"/>
        <source>Config file</source>
        <translation>Konfigurationsfil</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="119"/>
        <source>General options</source>
        <translation>Allmänna alternativ</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="144"/>
        <source>This is the command line monero wallet. It needs to connect to a monero
daemon to work correctly.</source>
        <translation>Detta är kommandoradsplånboken för Monero. Den måste ansluta till en Monero-
daemon för att fungera korrekt.</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="169"/>
        <source>Can&apos;t find config file </source>
        <translation>Det gick inte att hitta konfigurationsfilen </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="210"/>
        <source>Logging to: </source>
        <translation>Loggar till: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="212"/>
        <source>Logging to %s</source>
        <translation>Loggar till %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="216"/>
        <source>WARNING: You may not have a high enough lockable memory limit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="218"/>
        <source>see ulimit -l</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="146"/>
        <source>Usage:</source>
        <translation>Användning:</translation>
    </message>
</context>
</TS>
