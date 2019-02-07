<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="fr_FR">
<context>
    <name>Monero::AddressBookImpl</name>
    <message>
        <location filename="../src/wallet/api/address_book.cpp" line="53"/>
        <source>Invalid destination address</source>
        <translation>Adresse de destination invalide</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/address_book.cpp" line="63"/>
        <source>Invalid payment ID. Short payment ID should only be used in an integrated address</source>
        <translation>ID de paiement invalide. L&apos;identifiant de paiement court devrait seulement être utilisé dans une adresse intégrée</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/address_book.cpp" line="70"/>
        <source>Invalid payment ID</source>
        <translation>ID de paiement invalide</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/address_book.cpp" line="77"/>
        <source>Integrated address and long payment ID can&apos;t be used at the same time</source>
        <translation>Adresse intégrée et ID de paiement long ne peuvent pas être utilisés en même temps</translation>
    </message>
</context>
<context>
    <name>Monero::PendingTransactionImpl</name>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="91"/>
        <source>Attempting to save transaction to file, but specified file(s) exist. Exiting to not risk overwriting. File:</source>
        <translation>Tentative d&apos;enregistrement d&apos;une transaction dans un fichier, mais le fichier spécifié existe déjà. Sortie pour ne pas risquer de l&apos;écraser. Fichier&#xa0;:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="98"/>
        <source>Failed to write transaction(s) to file</source>
        <translation>Échec de l&apos;écriture de(s) transaction(s) dans le fichier</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="121"/>
        <source>daemon is busy. Please try again later.</source>
        <translation>le démon est occupé. Veuillez réessayer plus tard.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="124"/>
        <source>no connection to daemon. Please make sure daemon is running.</source>
        <translation>pas de connexion au démon. Veuillez vous assurer que le démon fonctionne.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="128"/>
        <source>transaction %s was rejected by daemon with status: </source>
        <translation>la transaction %s a été rejetée par le démon avec le statut&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="133"/>
        <source>. Reason: </source>
        <translation>. Raison&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="135"/>
        <source>Unknown exception: </source>
        <translation>Exception inconnue&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="138"/>
        <source>Unhandled exception</source>
        <translation>Exception non gérée</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="211"/>
        <source>Couldn&apos;t multisig sign data: </source>
        <translation>Signature multisig des données impossible : </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="233"/>
        <source>Couldn&apos;t sign multisig transaction: </source>
        <translation>Signature multisig de la transaction impossible : </translation>
    </message>
</context>
<context>
    <name>Monero::UnsignedTransactionImpl</name>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="75"/>
        <source>This is a watch only wallet</source>
        <translation>Ceci est un portefeuille d&apos;audit</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="85"/>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="92"/>
        <source>Failed to sign transaction</source>
        <translation>Échec de signature de transaction</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="168"/>
        <source>Claimed change does not go to a paid address</source>
        <translation>La monnaie réclamée ne va pas à une adresse payée</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="174"/>
        <source>Claimed change is larger than payment to the change address</source>
        <translation>La monnaie réclamée est supérieure au paiement à l&apos;adresse de monnaie</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="184"/>
        <source>Change goes to more than one address</source>
        <translation>La monnaie rendue va à plus d&apos;une adresse</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="197"/>
        <source>sending %s to %s</source>
        <translation>envoi de %s à %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="203"/>
        <source>with no destinations</source>
        <translation>sans destination</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="209"/>
        <source>%s change to %s</source>
        <translation>%s de monnaie rendue à %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="212"/>
        <source>no change</source>
        <translation>sans monnaie rendue</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="214"/>
        <source>Loaded %lu transactions, for %s, fee %s, %s, %s, with min ring size %lu. %s</source>
        <translation>%lu transactions chargées, pour %s, frais %s, %s, %s, taille de cercle minimum %lu, %s</translation>
    </message>
</context>
<context>
    <name>Monero::WalletImpl</name>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1389"/>
        <source>payment id has invalid format, expected 16 or 64 character hex string: </source>
        <translation>format d&apos;identifiant de paiement invalide, 16 ou 64 caractères hexadécimaux attendus&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1398"/>
        <source>Failed to add short payment id: </source>
        <translation>Échec de l&apos;ajout de l&apos;ID de paiement court&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1436"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1518"/>
        <source>daemon is busy. Please try again later.</source>
        <translation>le démon est occupé. Veuillez réessayer plus tard.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1438"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1520"/>
        <source>no connection to daemon. Please make sure daemon is running.</source>
        <translation>pas de connexion au démon. Veuillez vous assurer que le démon fonctionne.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1440"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1522"/>
        <source>RPC error: </source>
        <translation>Erreur RPC&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1468"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1553"/>
        <source>not enough outputs for specified ring size</source>
        <translation>pas assez de sorties pour la taille de cercle spécifiée</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1470"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1555"/>
        <source>found outputs to use</source>
        <translation>sorties à utiliser trouvées</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1472"/>
        <source>Please sweep unmixable outputs.</source>
        <translation>Veuillez balayer les sorties non mélangeables.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1446"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1529"/>
        <source>not enough money to transfer, available only %s, sent amount %s</source>
        <translation>pas assez de fonds pour le transfert, montant disponible %s, montant envoyé %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="541"/>
        <source>failed to parse address</source>
        <translation>échec de l&apos;analyse de l&apos;adresse</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="552"/>
        <source>failed to parse secret spend key</source>
        <translation>échec de l&apos;analyse de la clé secrète de dépense</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="575"/>
        <source>failed to parse secret view key</source>
        <translation>échec de l&apos;analyse de la clé secrète d&apos;audit</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="584"/>
        <source>failed to verify secret spend key</source>
        <translation>échec de la vérification de la clé secrète de dépense</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="588"/>
        <source>spend key does not match address</source>
        <translation>la clé de dépense ne correspond pas à l&apos;adresse</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="594"/>
        <source>failed to verify secret view key</source>
        <translation>échec de la vérification de la clé secrète d&apos;audit</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="598"/>
        <source>view key does not match address</source>
        <translation>la clé d&apos;audit ne correspond pas à l&apos;adresse</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="621"/>
        <location filename="../src/wallet/api/wallet.cpp" line="638"/>
        <source>failed to generate new wallet: </source>
        <translation>échec de la génération du nouveau portefeuille&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="885"/>
        <source>Failed to send import wallet request</source>
        <translation>Échec de l&apos;envoi de la requête d&apos;importation de portefeuille</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1055"/>
        <source>Failed to load unsigned transactions</source>
        <translation>Échec du chargement des transaction non signées</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1074"/>
        <source>Failed to load transaction from file</source>
        <translation>Échec du chargement de la transaction du fichier</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1090"/>
        <source>Wallet is view only</source>
        <translation>Portefeuille d&apos;audit uniquement</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1098"/>
        <source>failed to save file </source>
        <translation>échec de l&apos;enregistrement du fichier </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1114"/>
        <source>Key images can only be imported with a trusted daemon</source>
        <translation>Les images de clé ne peuvent être importées qu&apos;avec un démon de confiance</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1127"/>
        <source>Failed to import key images: </source>
        <translation>Échec de l&apos;importation des images de clé&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1159"/>
        <source>Failed to get subaddress label: </source>
        <translation>Échec de la récupération de l&apos;étiquette de sous-adresse&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1172"/>
        <source>Failed to set subaddress label: </source>
        <translation>Échec de l&apos;affectation de l&apos;étiquette de sous-adresse&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="567"/>
        <source>Neither view key nor spend key supplied, cancelled</source>
        <translation>Ni clé d&apos;audit ni clé de dépense fournie, annulation</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="686"/>
        <source>Electrum seed is empty</source>
        <translation>La phrase Electrum est vide</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="695"/>
        <source>Electrum-style word list failed verification</source>
        <translation>Échec de la vérification de la liste de mots de style Electrum</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1189"/>
        <source>Failed to get multisig info: </source>
        <translation>Échec de la récupération des infos multisig : </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1206"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1220"/>
        <source>Failed to make multisig: </source>
        <translation>Échec de la création multisig : </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1235"/>
        <source>Failed to finalize multisig wallet creation</source>
        <translation>Échec de la finalisation de la création du portefeuille multisig</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1238"/>
        <source>Failed to finalize multisig wallet creation: </source>
        <translation>Échec de la finalisation de la création du portefeuille multisig : </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1254"/>
        <source>Failed to export multisig images: </source>
        <translation>Échec de l&apos;exportation des images multisig : </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1272"/>
        <source>Failed to parse imported multisig images</source>
        <translation>Échec de l&apos;analyse des images multisig importées</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1282"/>
        <source>Failed to import multisig images: </source>
        <translation>Échec de l&apos;importation des images multisig : </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1296"/>
        <source>Failed to check for partial multisig key images: </source>
        <translation>Échec de la vérification des images de clé multisig partielles : </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1324"/>
        <source>Failed to restore multisig transaction: </source>
        <translation>Échec de la restauration de la transaction multisig : </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1364"/>
        <source>Invalid destination address</source>
        <translation>Adresse de destination invalide</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1442"/>
        <source>failed to get outputs to mix: %s</source>
        <translation>échec de la récupération de sorties à mélanger : %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1453"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1537"/>
        <source>not enough money to transfer, overall balance only %s, sent amount %s</source>
        <translation>pas assez de fonds pour le transfer, solde global disponible %s, montant envoyé %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1460"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1545"/>
        <source>not enough money to transfer, available only %s, transaction amount %s = %s + %s (fee)</source>
        <translation>pas assez de fonds pour le transfert, montant disponible %s, montant envoyé %s = %s + %s (frais)</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1470"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1555"/>
        <source>output amount</source>
        <translation>montant de la sortie</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1475"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1559"/>
        <source>transaction was not constructed</source>
        <translation>la transaction n&apos;a pas été construite</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1478"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1562"/>
        <source>transaction %s was rejected by daemon with status: </source>
        <translation>la transaction %s a été rejetée par le démon avec le statut&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1483"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1567"/>
        <source>one of destinations is zero</source>
        <translation>une des destinations est zéro</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1485"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1569"/>
        <source>failed to find a suitable way to split transactions</source>
        <translation>échec de la recherche d&apos;une façon adéquate de scinder les transactions</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1487"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1571"/>
        <source>unknown transfer error: </source>
        <translation>erreur de transfert inconnue&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1489"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1573"/>
        <source>internal error: </source>
        <translation>erreur interne&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1491"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1575"/>
        <source>unexpected error: </source>
        <translation>erreur inattendue&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1493"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1577"/>
        <source>unknown error</source>
        <translation>erreur inconnue</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1524"/>
        <source>failed to get outputs to mix</source>
        <translation>échec de la récupération de sorties à mélanger</translation>
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
        <translation>Échec de l&apos;analyse de l&apos;ID de transaction</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1669"/>
        <source>no tx keys found for this txid</source>
        <translation>aucune clé de transaction trouvée pour cet ID de transaction</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1687"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1696"/>
        <source>Failed to parse tx key</source>
        <translation>Échec de l&apos;analyse de la clé de transaction</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1705"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1734"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1762"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1843"/>
        <source>Failed to parse address</source>
        <translation>Échec de l&apos;analyse de l&apos;adresse</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1848"/>
        <source>Address must not be a subaddress</source>
        <translation>L&apos;adresse ne doit pas être une sous-adresse</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1888"/>
        <source>The wallet must be in multisig ready state</source>
        <translation>Le portefeuille doit être multisig et prêt</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1910"/>
        <source>Given string is not a key</source>
        <translation>La chaîne entrée n&apos;est pas une clé</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2138"/>
        <source>Rescan spent can only be used with a trusted daemon</source>
        <translation>Réexaminer les dépenses ne peut se faire qu&apos;avec un démon de confiance</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2187"/>
        <source>Invalid output: </source>
        <translation>Sortie invalide : </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2194"/>
        <source>Failed to mark outputs as spent</source>
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
        <location filename="../src/wallet/api/wallet.cpp" line="2205"/>
        <location filename="../src/wallet/api/wallet.cpp" line="2227"/>
        <source>Failed to parse output amount</source>
        <translation>Échec de l&apos;analyse du montant de la sortie</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2210"/>
        <location filename="../src/wallet/api/wallet.cpp" line="2232"/>
        <source>Failed to parse output offset</source>
        <translation>Échec de l&apos;analyse de l&apos;offset de la sortie</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2249"/>
        <location filename="../src/wallet/api/wallet.cpp" line="2288"/>
        <source>Failed to parse key image</source>
        <translation>Échec de l&apos;analyse de l&apos;image de clé</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2255"/>
        <source>Failed to get ring</source>
        <translation>Échec de la récupération du cercle</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2273"/>
        <source>Failed to get rings</source>
        <translation>Échec de la récupération des cercles</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2294"/>
        <source>Failed to set ring</source>
        <translation>Échec de l&apos;affectation du cercle</translation>
    </message>
</context>
<context>
    <name>Wallet</name>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="301"/>
        <source>Failed to parse address</source>
        <translation>Échec de l&apos;analyse de l&apos;adresse</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="308"/>
        <source>Failed to parse key</source>
        <translation>Échec de l&apos;analyse de la clé</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="316"/>
        <source>failed to verify key</source>
        <translation>Échec de la vérification de la clé</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="326"/>
        <source>key does not match address</source>
        <translation>la clé ne correspond pas à l&apos;adresse</translation>
    </message>
</context>
<context>
    <name>command_line</name>
    <message>
        <location filename="../src/common/command_line.cpp" line="54"/>
        <source>yes</source>
        <translation>oui</translation>
    </message>
    <message>
        <location filename="../src/common/command_line.cpp" line="68"/>
        <source>no</source>
        <translation>non</translation>
    </message>
</context>
<context>
    <name>cryptonote::rpc_args</name>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="40"/>
        <source>Specify IP to bind RPC server</source>
        <translation>Spécifier l&apos;IP à laquelle lier le serveur RPC</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="41"/>
        <source>Specify username[:password] required for RPC server</source>
        <translation>Spécifier le nom_utilisateur[:mot_de_passe] requis pour le serveur RPC</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="42"/>
        <source>Confirm rpc-bind-ip value is NOT a loopback (local) IP</source>
        <translation>Confirmer que la valeur de rpc-bind-ip n&apos;est PAS une IP de bouclage (locale)</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="43"/>
        <source>Specify a comma separated list of origins to allow cross origin resource sharing</source>
        <translation>Spécifier une liste d&apos;origines séparées par des virgules pour autoriser le partage de ressource de différentes origines (CORS)</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="70"/>
        <source>Invalid IP address given for --</source>
        <translation>Adresse IP invalide fournie pour --</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="78"/>
        <source> permits inbound unencrypted external connections. Consider SSH tunnel or SSL proxy instead. Override with --</source>
        <translation> autorise les connexions entrantes non cryptées venant de l&apos;extérieur. Considérez plutôt un tunnel SSH ou un proxy SSL. Outrepasser avec --</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="101"/>
        <source>Username specified with --</source>
        <translation>Le nom d&apos;utilisateur spécifié avec --</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="101"/>
        <location filename="../src/rpc/rpc_args.cpp" line="111"/>
        <source> cannot be empty</source>
        <translation> ne peut pas être vide</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="111"/>
        <source> requires RPC server password --</source>
        <translation> nécessite le mot de passe du serveur RPC --</translation>
    </message>
</context>
<context>
    <name>cryptonote::simple_wallet</name>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="658"/>
        <source>Commands: </source>
        <translation>Commandes&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4421"/>
        <source>failed to read wallet password</source>
        <translation>échec de la lecture du mot de passe du portefeuille</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4016"/>
        <source>invalid password</source>
        <translation>mot de passe invalide</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3091"/>
        <source>set seed: needs an argument. available options: language</source>
        <translation>set seed&#xa0;: requiert un argument. options disponibles&#xa0;: language</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3126"/>
        <source>set: unrecognized argument(s)</source>
        <translation>set&#xa0;: argument(s) non reconnu(s)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4261"/>
        <source>wallet file path not valid: </source>
        <translation>chemin du fichier portefeuille non valide&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3196"/>
        <source>Attempting to generate or restore wallet, but specified file(s) exist.  Exiting to not risk overwriting.</source>
        <translation>Tentative de génération ou de restauration d&apos;un portefeuille, mais le fichier spécifié existe déjà. Sortie pour ne pas risquer de l&apos;écraser.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3077"/>
        <source>needs an argument</source>
        <translation>requiert un argument</translation>
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
        <translation>0 ou 1</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3110"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3114"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3121"/>
        <source>unsigned integer</source>
        <translation>entier non signé</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3352"/>
        <source>--restore-deterministic-wallet uses --generate-new-wallet, not --wallet-file</source>
        <translation>--restore-deterministic-wallet utilise --generate-new-wallet, pas --wallet-file</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3381"/>
        <source>specify a recovery parameter with the --electrum-seed=&quot;words list here&quot;</source>
        <translation>spécifiez un paramètre de récupération avec --electrum-seed=&quot;liste de mots ici&quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3757"/>
        <source>specify a wallet path with --generate-new-wallet (not --wallet-file)</source>
        <translation>spécifiez un chemin de portefeuille avec --generate-new-wallet (pas --wallet-file)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3949"/>
        <source>wallet failed to connect to daemon: </source>
        <translation>échec de la connexion du portefeuille au démon&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3957"/>
        <source>Daemon uses a different RPC major version (%u) than the wallet (%u): %s. Either update one of them, or use --allow-mismatched-daemon-version.</source>
        <translation>Le démon utilise une version majeure de RPC (%u) différente de celle du portefeuille (%u)&#xa0;: %s. Mettez l&apos;un des deux à jour, ou utilisez --allow-mismatched-daemon-version.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3978"/>
        <source>List of available languages for your wallet&apos;s seed:</source>
        <translation>Liste des langues disponibles pour la phrase mnémonique de votre portefeuille&#xa0;:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4062"/>
        <source>You had been using a deprecated version of the wallet. Please use the new seed that we provide.
</source>
        <translation>Vous avez utilisé une version obsolète du portefeuille. Veuillez dorénavant utiliser la nouvelle phrase mnémonique que nous fournissons.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4078"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4150"/>
        <source>Generated new wallet: </source>
        <translation>Nouveau portefeuille généré&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4087"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4155"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4197"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4250"/>
        <source>failed to generate new wallet: </source>
        <translation>échec de la génération du nouveau portefeuille&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4292"/>
        <source>Opened watch-only wallet</source>
        <translation>Ouverture du portefeuille d&apos;audit</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4296"/>
        <source>Opened wallet</source>
        <translation>Ouverture du portefeuille</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4314"/>
        <source>You had been using a deprecated version of the wallet. Please proceed to upgrade your wallet.
</source>
        <translation>Vous avez utilisé une version obsolète du portefeuille. Veuillez procéder à la mise à jour de votre portefeuille.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4329"/>
        <source>You had been using a deprecated version of the wallet. Your wallet file format is being upgraded now.
</source>
        <translation>Vous avez utilisé une version obsolète du portefeuille. Le format de votre fichier portefeuille est en cours de mise à jour.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4337"/>
        <source>failed to load wallet: </source>
        <translation>échec du chargement du portefeuille&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4354"/>
        <source>Use the &quot;help&quot; command to see the list of available commands.
</source>
        <translation>Utilisez la commande &quot;help&quot; pour voir la liste des commandes disponibles.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4399"/>
        <source>Wallet data saved</source>
        <translation>Données du portefeuille sauvegardées</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4493"/>
        <source>Mining started in daemon</source>
        <translation>La mine a démarré dans le démon</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4495"/>
        <source>mining has NOT been started: </source>
        <translation>la mine n&apos;a PAS démarré&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4515"/>
        <source>Mining stopped in daemon</source>
        <translation>La mine a été stoppée dans le démon</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4517"/>
        <source>mining has NOT been stopped: </source>
        <translation>la mine n&apos;a PAS été stoppée&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4599"/>
        <source>Blockchain saved</source>
        <translation>Chaîne de blocs sauvegardée</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4614"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4647"/>
        <source>Height </source>
        <translation>Hauteur </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4649"/>
        <source>spent </source>
        <translation>dépensé </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4756"/>
        <source>Starting refresh...</source>
        <translation>Démarrage du rafraîchissement...</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4770"/>
        <source>Refresh done, blocks received: </source>
        <translation>Rafraîchissement effectué, blocs reçus&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5999"/>
        <source>payment id has invalid format, expected 16 or 64 character hex string: </source>
        <translation>format d&apos;identifiant de paiement invalide, 16 ou 64 caractères hexadécimaux attendus&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5354"/>
        <source>bad locked_blocks parameter:</source>
        <translation>mauvais paramètre locked_blocks&#xa0;:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6019"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6289"/>
        <source>a single transaction cannot use more than one payment id: </source>
        <translation>une unique transaction ne peut pas utiliser plus d&apos;un ID de paiement&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5456"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6028"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6257"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6297"/>
        <source>failed to set up payment id, though it was decoded correctly</source>
        <translation>échec de la définition de l&apos;ID de paiement, bien qu&apos;il ait été décodé correctement</translation>
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
        <location filename="../src/simplewallet/simplewallet.cpp" line="1951"/>
        <source>Failed to mark output spent: </source>
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
        <location filename="../src/simplewallet/simplewallet.cpp" line="2038"/>
        <source>Please confirm the transaction on the device</source>
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
        <location filename="../src/simplewallet/simplewallet.cpp" line="3668"/>
        <source>Secret spend key (%u of %u)</source>
        <translation type="unfinished"></translation>
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
        <location filename="../src/simplewallet/simplewallet.cpp" line="3988"/>
        <source>Enter the number corresponding to the language of your choice</source>
        <translation type="unfinished"></translation>
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
        <location filename="../src/simplewallet/simplewallet.cpp" line="4913"/>
        <source>Invalid keyword: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4962"/>
        <source>Heights: </source>
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
        <translation>transaction annulée.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5542"/>
        <source>Failed to check for backlog: </source>
        <translation>Échec de la vérification du backlog&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5583"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6073"/>
        <source>
Transaction </source>
        <translation>
Transaction </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5588"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6078"/>
        <source>Spending from address index %d
</source>
        <translation>Dépense depuis l&apos;adresse d&apos;index %d
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5590"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6080"/>
        <source>WARNING: Outputs of multiple addresses are being used together, which might potentially compromise your privacy.
</source>
        <translation>ATTENTION&#xa0;: Des sorties de multiples adresses sont utilisées ensemble, ce qui pourrait potentiellement compromettre votre confidentialité.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5592"/>
        <source>Sending %s.  </source>
        <translation>Envoi de %s.  </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5595"/>
        <source>Your transaction needs to be split into %llu transactions.  This will result in a transaction fee being applied to each transaction, for a total fee of %s</source>
        <translation>Votre transaction doit être scindée en %llu transactions. Il en résulte que des frais de transaction doivent être appliqués à chaque transaction, pour un total de %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5601"/>
        <source>The transaction fee is %s</source>
        <translation>Les frais de transaction sont de %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5604"/>
        <source>, of which %s is dust from change</source>
        <translation>, dont %s est de la poussière de monnaie rendue</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5605"/>
        <source>.</source>
        <translation>.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5605"/>
        <source>A total of %s from dust change will be sent to dust address</source>
        <translation>Un total de %s de poussière de monnaie rendue sera envoyé à une adresse de poussière</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5610"/>
        <source>.
This transaction will unlock on block %llu, in approximately %s days (assuming 2 minutes per block)</source>
        <translation>.
Cette transaction sera déverrouillée au bloc %llu, dans approximativement %s jours (en supposant 2 minutes par bloc)</translation>
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
        <translation>Échec de l&apos;écriture de(s) transaction(s) dans le fichier</translation>
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
        <translation>Transaction(s) non signée(s) écrite(s) dans le fichier avec succès&#xa0;: </translation>
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
        <translation>Aucune sortie non mélangeable trouvée</translation>
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
        <location filename="../src/simplewallet/simplewallet.cpp" line="5866"/>
        <source>No address given</source>
        <translation>Aucune adresse fournie</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6251"/>
        <source>failed to parse Payment ID</source>
        <translation>échec de l&apos;analyse de l&apos;ID de paiement</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6274"/>
        <source>failed to parse key image</source>
        <translation>échec de l&apos;analyse de l&apos;image de clé</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6328"/>
        <source>No outputs found</source>
        <translation>Pas de sorties trouvées</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6333"/>
        <source>Multiple transactions are created, which is not supposed to happen</source>
        <translation>De multiples transactions sont crées, ce qui n&apos;est pas supposé arriver</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6338"/>
        <source>The transaction uses multiple or no inputs, which is not supposed to happen</source>
        <translation>La transaction utilise aucune ou de multiples entrées, ce qui n&apos;est pas supposé arriver</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6415"/>
        <source>missing threshold amount</source>
        <translation>montant seuil manquant</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6420"/>
        <source>invalid amount threshold</source>
        <translation>montant seuil invalide</translation>
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
        <location filename="../src/simplewallet/simplewallet.cpp" line="6569"/>
        <source>Claimed change does not go to a paid address</source>
        <translation>La monnaie réclamée ne va pas à une adresse payée</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6574"/>
        <source>Claimed change is larger than payment to the change address</source>
        <translation>La monnaie réclamée est supérieure au paiement à l&apos;adresse de monnaie</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6605"/>
        <source>sending %s to %s</source>
        <translation>envoi de %s à %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6615"/>
        <source> dummy output(s)</source>
        <translation> sortie(s) factice(s)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6618"/>
        <source>with no destinations</source>
        <translation>sans destination</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6659"/>
        <source>This is a multisig wallet, it can only sign with sign_multisig</source>
        <translation>Ceci est un portefeuille multisig, il ne peut signer qu&apos;avec sign_multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6682"/>
        <source>Failed to sign transaction</source>
        <translation>Échec de signature de transaction</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6688"/>
        <source>Failed to sign transaction: </source>
        <translation>Échec de signature de transaction&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6709"/>
        <source>Transaction raw hex data exported to </source>
        <translation>Données brutes hex de la transaction exportées vers </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6730"/>
        <source>Failed to load transaction from file</source>
        <translation>Échec du chargement de la transaction du fichier</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4787"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5109"/>
        <source>RPC error: </source>
        <translation>Erreur RPC&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="708"/>
        <source>wallet is watch-only and has no spend key</source>
        <translation>c&apos;est un portefeuille d&apos;audit et il n&apos;a pas de clé de dépense</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="852"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1036"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1089"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1156"/>
        <source>Your original password was incorrect.</source>
        <translation>Votre mot de passe original est incorrect.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="867"/>
        <source>Error with wallet rewrite: </source>
        <translation>Erreur avec la réécriture du portefeuille&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2302"/>
        <source>invalid unit</source>
        <translation>unité invalide</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2320"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2382"/>
        <source>invalid count: must be an unsigned integer</source>
        <translation>nombre invalide&#xa0;: un entier non signé est attendu</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2338"/>
        <source>invalid value</source>
        <translation>valeur invalide</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3820"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3840"/>
        <source>bad m_restore_height parameter: </source>
        <translation>mauvais paramètre m_restore_height&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3784"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3831"/>
        <source>Restore height is: </source>
        <translation>La hauteur de restauration est&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4571"/>
        <source>Daemon is local, assuming trusted</source>
        <translation>Le démon est local, supposons qu&apos;il est de confiance</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4417"/>
        <source>Password for new watch-only wallet</source>
        <translation>Mot de passe pour le nouveau portefeuille d&apos;audit</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4797"/>
        <source>internal error: </source>
        <translation>erreur interne&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1624"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4802"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5114"/>
        <source>unexpected error: </source>
        <translation>erreur inattendue&#xa0;: </translation>
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
        <translation>erreur inconnue</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4812"/>
        <source>refresh failed: </source>
        <translation>échec du rafraîchissement&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4812"/>
        <source>Blocks received: </source>
        <translation>Blocs reçus&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4845"/>
        <source>unlocked balance: </source>
        <translation>solde débloqué&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3111"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4952"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5014"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7575"/>
        <source>amount</source>
        <translation>montant</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="354"/>
        <source>false</source>
        <translation>faux</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="672"/>
        <source>Unknown command: </source>
        <translation>Commande inconnue&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="679"/>
        <source>Command usage: </source>
        <translation>Usage de la commande&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="682"/>
        <source>Command description: </source>
        <translation>Description de la commande&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="748"/>
        <source>wallet is multisig but not yet finalized</source>
        <translation>le portefeuille est multisig mais pas encore finalisé</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="781"/>
        <source>Failed to retrieve seed</source>
        <translation>Échec de la récupération de la phrase mnémonique</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="805"/>
        <source>wallet is multisig and has no seed</source>
        <translation>le portefeuille est multisig et n&apos;a pas de phrase mnémonique</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="914"/>
        <source>Error: failed to estimate backlog array size: </source>
        <translation>Erreur&#xa0;: échec de l&apos;estimation de la taille du tableau d&apos;arriéré&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="919"/>
        <source>Error: bad estimated backlog array size</source>
        <translation>Erreur&#xa0;: mauvaise estimation de la taille du tableau d&apos;arriéré</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="931"/>
        <source> (current)</source>
        <translation> (actuel)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="934"/>
        <source>%u block (%u minutes) backlog at priority %u%s</source>
        <translation>arriéré de %u bloc(s) (%u minutes) à la priorité %u%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="936"/>
        <source>%u to %u block (%u to %u minutes) backlog at priority %u</source>
        <translation>arriéré de %u à %u bloc(s) (%u à %u minutes) à la priorité %u</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="939"/>
        <source>No backlog at priority </source>
        <translation>Pas d&apos;arriéré à la priorité </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="959"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1004"/>
        <source>This wallet is already multisig</source>
        <translation>Le portefeuille est déjà multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="964"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1009"/>
        <source>wallet is watch-only and cannot be made multisig</source>
        <translation>c&apos;est un portefeuille d&apos;audit et il ne peut pas être tranformé en multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="970"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1015"/>
        <source>This wallet has been used before, please use a new wallet to create a multisig wallet</source>
        <translation>Ce portefeuille a été utilisé auparavant, veuillez utiliser un nouveau portefeuille pour créer un portefeuille multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="978"/>
        <source>Send this multisig info to all other participants, then use make_multisig &lt;threshold&gt; &lt;info1&gt; [&lt;info2&gt;...] with others&apos; multisig info</source>
        <translation>Envoyez ces infos multisig à tous les autres participants, ensuite utilisez make_multisig &lt;seuil&gt; &lt;info1&gt; [&lt;info2&gt;...] avec les infos multisig des autres</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="979"/>
        <source>This includes the PRIVATE view key, so needs to be disclosed only to that multisig wallet&apos;s participants </source>
        <translation>Ceci inclut la clé PRIVÉE d&apos;audit, donc ne doit être divulgué qu&apos;aux participants de ce portefeuille multisig </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1029"/>
        <source>Invalid threshold</source>
        <translation>Seuil invalide</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1049"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1171"/>
        <source>Another step is needed</source>
        <translation>Une autre étape est nécessaire</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1061"/>
        <source>Error creating multisig: </source>
        <translation>Erreur de création multisig&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1068"/>
        <source>Error creating multisig: new wallet is not multisig</source>
        <translation>Erreur de création multisig&#xa0;: le nouveau portefeuille n&apos;est pas multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1071"/>
        <source> multisig address: </source>
        <translation> adresse multisig&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1095"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1144"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1211"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1277"/>
        <source>This wallet is not multisig</source>
        <translation>Ce portefeuille n&apos;est pas multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1100"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1149"/>
        <source>This wallet is already finalized</source>
        <translation>Ce portefeuille est déjà finalisé</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1116"/>
        <source>Failed to finalize multisig</source>
        <translation>Échec de finalisation multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1122"/>
        <source>Failed to finalize multisig: </source>
        <translation>Échec de finalisation multisig&#xa0;: </translation>
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
        <translation>Ce portefeuille multisig n&apos;est pas encore finalisé</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1252"/>
        <source>Error exporting multisig info: </source>
        <translation>Erreur d&apos;importation des infos multisig&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1256"/>
        <source>Multisig info exported to </source>
        <translation>Infos multisig exportées vers </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1322"/>
        <source>Multisig info imported</source>
        <translation>Infos multisig importées</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1326"/>
        <source>Failed to import multisig info: </source>
        <translation>Échec de l&apos;importation des infos multisig&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1337"/>
        <source>Failed to update spent status after importing multisig info: </source>
        <translation>Échec de la mise à jour de l&apos;état des dépenses après l&apos;importation des infos multisig&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1343"/>
        <source>Untrusted daemon, spent status may be incorrect. Use a trusted daemon and run &quot;rescan_spent&quot;</source>
        <translation>Pas un démon de confiance, l&apos;état des dépenses peut être incorrect. Utilisez un démon de confiance et executez &quot;rescan_spent&quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1371"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1487"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1568"/>
        <source>This is not a multisig wallet</source>
        <translation>Ceci n&apos;est pas un portefeuille multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1421"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1430"/>
        <source>Failed to sign multisig transaction</source>
        <translation>Échec de la signature de la transaction multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1437"/>
        <source>Multisig error: </source>
        <translation>Erreur multisig&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1442"/>
        <source>Failed to sign multisig transaction: </source>
        <translation>Échec de la signature de la transaction multisig&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1465"/>
        <source>It may be relayed to the network with submit_multisig</source>
        <translation>Elle peut être transmise au réseau avec submit_multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1524"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1594"/>
        <source>Failed to load multisig transaction from file</source>
        <translation>Échec du chargement de la transaction multisig du fichier</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1530"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1599"/>
        <source>Multisig transaction signed by only %u signers, needs %u more signatures</source>
        <translation>Transaction multisig signée par %u signataire(s) seulement, nécessite %u signature(s) de plus</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1539"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8949"/>
        <source>Transaction successfully submitted, transaction </source>
        <translation>Transaction transmise avec succès, transaction </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1540"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8950"/>
        <source>You can check its status by using the `show_transfers` command.</source>
        <translation>Vous pouvez vérifier son statut en utilisant la commane &apos;show_transfers&apos;.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1615"/>
        <source>Failed to export multisig transaction to file </source>
        <translation>Échec de l&apos;exportation de la transaction multisig vers le fichier </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1619"/>
        <source>Saved exported multisig transaction file(s): </source>
        <translation>Transaction multisig enregistrée dans le(s) fichier(s)&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2111"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2117"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2136"/>
        <source>ring size must be an integer &gt;= </source>
        <translation>la taille de cercle doit être un nombre entier &gt;= </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2141"/>
        <source>could not change default ring size</source>
        <translation>échec du changement de la taille de cercle par défaut</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2416"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2487"/>
        <source>Invalid height</source>
        <translation>Hauteur invalide</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2580"/>
        <source>Start mining in the daemon (bg_mining and ignore_battery are optional booleans).</source>
        <translation>Démarrer la mine dans le démon (mine_arrière_plan et ignorer_batterie sont des booléens facultatifs).</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2583"/>
        <source>Stop mining in the daemon.</source>
        <translation>Arrêter la mine dans le démon.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2587"/>
        <source>Set another daemon to connect to.</source>
        <translation>Spécifier un autre démon auquel se connecter.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2590"/>
        <source>Save the current blockchain data.</source>
        <translation>Sauvegarder les données actuelles de la châine de blocs.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2593"/>
        <source>Synchronize the transactions and balance.</source>
        <translation>Synchroniser les transactions et le solde.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2597"/>
        <source>Show the wallet&apos;s balance of the currently selected account.</source>
        <translation>Afficher le solde du compte actuellement sélectionné.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2607"/>
        <source>Show the payments for the given payment IDs.</source>
        <translation>Afficher les paiements pour les IDs de paiement donnés.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2610"/>
        <source>Show the blockchain height.</source>
        <translation>Afficher la hauteur de la chaîne de blocs.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2624"/>
        <source>Send all unmixable outputs to yourself with ring_size 1</source>
        <translation>Envoyer toutes les sorties non mélangeables à vous-même avec une taille de cercle de 1</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2631"/>
        <source>Send all unlocked outputs below the threshold to an address.</source>
        <translation>Envoyer toutes les sorties débloquées d&apos;un montant inférieur au seuil à une adresse.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2635"/>
        <source>Send a single output of the given key image to an address without change.</source>
        <translation>Envoyer une unique sortie ayant une image de clé donnée à une adresse sans rendu de monnaie.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2639"/>
        <source>Donate &lt;amount&gt; to the development team (donate.getmonero.org).</source>
        <translation>Donner &lt;montant&gt; à l&apos;équipe de développement (donate.getmonero.org).</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2646"/>
        <source>Submit a signed transaction from a file.</source>
        <translation>Transmettre une transaction signée d&apos;un fichier.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2650"/>
        <source>Change the current log detail (level must be &lt;0-4&gt;).</source>
        <translation>Changer le niveau de détail du journal (le niveau doit être &lt;0-4&gt;).</translation>
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
        <translation>Si aucun argument n&apos;est spécifié, le portefeuille affiche tous les comptes existants ainsi que leurs soldes.
Si l&apos;argument &quot;new&quot; est spécifié, le portefeuille crée un nouveau compte avec son étiquette initialisée par le texte fourni (qui peut être vide).
Si l&apos;argument &quot;switch&quot; est spécifié, le portefeuille passe au compte spécifié par &lt;index&gt;.
Si l&apos;argument &quot;label&quot; est spécifié, le portefeuille affecte le texte fourni à l&apos;étiquette du compte spécifié par &lt;index&gt;.
Si l&apos;argument &quot;tag&quot; est spécifié, un mot clé &lt;mot_clé&gt; est assigné aux comptes spécifiés &lt;account_index_1&gt;, &lt;account_index_2&gt;, ....
Si l&apos;argument &quot;untag&quot; est spécifié, les mots clés assignés aux comptes spécifiés &lt;account_index_1&gt;, &lt;account_index_2&gt; ..., sont supprimés.
Si l&apos;argument &quot;tag_description&quot; est spécifié, le texte arbitraire &lt;description&gt; est assigné au mot clé &lt;mot_clé&gt;.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2668"/>
        <source>Encode a payment ID into an integrated address for the current wallet public address (no argument uses a random payment ID), or decode an integrated address to standard address and payment ID</source>
        <translation>Encoder un ID de paiement dans une adresse intégrée pour l&apos;adresse publique du portefeuille actuel (en l&apos;absence d&apos;argument un ID de paiement aléatoire est utilisé), ou décoder une adresse intégrée en une adresse standard et un ID de paiement</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2672"/>
        <source>Print all entries in the address book, optionally adding/deleting an entry to/from it.</source>
        <translation>Afficher toutes les entrées du carnet d&apos;adresses, optionnellement en y ajoutant/supprimant une entrée.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2675"/>
        <source>Save the wallet data.</source>
        <translation>Sauvegarder les données du portefeuille.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2678"/>
        <source>Save a watch-only keys file.</source>
        <translation>Sauvegarder un fichier de clés d&apos;audit.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2681"/>
        <source>Display the private view key.</source>
        <translation>Afficher la clé privée d&apos;audit.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2684"/>
        <source>Display the private spend key.</source>
        <translation>Afficher la clé privée de dépense.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2687"/>
        <source>Display the Electrum-style mnemonic seed</source>
        <translation>Afficher la phrase mnémonique de style Electrum</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2737"/>
        <source>Display the encrypted Electrum-style mnemonic seed.</source>
        <translation>Afficher la phrase mnémonique de style Electrum chiffrée.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2740"/>
        <source>Rescan the blockchain for spent outputs.</source>
        <translation>Rescanner la chaîne de blocs pour trouver les sorties dépensées.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2744"/>
        <source>Get the transaction key (r) for a given &lt;txid&gt;.</source>
        <translation>Obtenir la clé de transaction (r) pour un &lt;ID_transaction&gt; donné.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2752"/>
        <source>Check the amount going to &lt;address&gt; in &lt;txid&gt;.</source>
        <translation>Vérifier le montant allant à &lt;adresse&gt; dans &lt;ID_transaction&gt;.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2756"/>
        <source>Generate a signature proving funds sent to &lt;address&gt; in &lt;txid&gt;, optionally with a challenge string &lt;message&gt;, using either the transaction secret key (when &lt;address&gt; is not your wallet&apos;s address) or the view secret key (otherwise), which does not disclose the secret key.</source>
        <translation>Générer une signature prouvant l&apos;envoi de fonds à &lt;adresse&gt; dans &lt;ID_transaction&gt;, optionnellement avec un &lt;message&gt; comme challenge, en utilisant soit la clé secrète de transaction (quand &lt;adresse&gt; n&apos;est pas l&apos;adresse de votre portefeuille) soit la clé secrète d&apos;audit (dans le cas contraire), tout en ne divulgant pas la clé secrète.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2760"/>
        <source>Check the proof for funds going to &lt;address&gt; in &lt;txid&gt; with the challenge string &lt;message&gt; if any.</source>
        <translation>Vérifier la validité de la preuve de fonds allant à &lt;adresse&gt; dans &lt;ID_transaction&gt; avec le &lt;message&gt; de challenge s&apos;il y en a un.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2764"/>
        <source>Generate a signature proving that you generated &lt;txid&gt; using the spend secret key, optionally with a challenge string &lt;message&gt;.</source>
        <translation>Générer une signature prouvant que vous avez créé &lt;ID_transaction&gt; en utilisant la clé secrète de dépense, optionnellement avec un &lt;message&gt; comme challenge.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2768"/>
        <source>Check a signature proving that the signer generated &lt;txid&gt;, optionally with a challenge string &lt;message&gt;.</source>
        <translation>Vérifier la validité de la preuve que le signataire a créé &lt;ID_transaction&gt;, optionnellement avec un &lt;message&gt; comme challenge.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2772"/>
        <source>Generate a signature proving that you own at least this much, optionally with a challenge string &lt;message&gt;.
If &apos;all&apos; is specified, you prove the entire sum of all of your existing accounts&apos; balances.
Otherwise, you prove the reserve of the smallest possible amount above &lt;amount&gt; available in your current account.</source>
        <translation>Générer une signature prouvant que vous possédez au moins ce montant, optionnellement avec un &lt;message&gt; comme challenge.
Si &apos;all&apos; est spécifié, vous prouvez la somme totale des soldes de tous vos comptes existants.
Sinon, vous prouvez le plus petit solde supérieur à &lt;montant&gt; dans votre compte actuel.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2778"/>
        <source>Check a signature proving that the owner of &lt;address&gt; holds at least this much, optionally with a challenge string &lt;message&gt;.</source>
        <translation>Vérifier la validité d&apos;une signature prouvant que le propriétaire d&apos;une &lt;adresse&gt; détient au moins un montant, optionnellement avec un &lt;message&gt; comme challenge.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2798"/>
        <source>Show the unspent outputs of a specified address within an optional amount range.</source>
        <translation>Afficher les sorties non dépensées d&apos;une adresse spécifique dans un interval de montants facultatif.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2802"/>
        <source>Rescan the blockchain from scratch. If &quot;hard&quot; is specified, you will lose any information which can not be recovered from the blockchain itself.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2806"/>
        <source>Set an arbitrary string note for a &lt;txid&gt;.</source>
        <translation>Définir un texte arbitraire comme note pour &lt;ID_transaction&gt;.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2810"/>
        <source>Get a string note for a txid.</source>
        <translation>Obtenir le texte de la note pour &lt;ID_transaction&gt;.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2814"/>
        <source>Set an arbitrary description for the wallet.</source>
        <translation>Définir un texte arbitraire comme description du portefeuille.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2818"/>
        <source>Get the description of the wallet.</source>
        <translation>Obtenir la description du portefeuille.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2821"/>
        <source>Show the wallet&apos;s status.</source>
        <translation>Afficher l&apos;état du portefeuille.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2824"/>
        <source>Show the wallet&apos;s information.</source>
        <translation>Afficher les informations du portefeuille.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2828"/>
        <source>Sign the contents of a file.</source>
        <translation>Signer le contenu d&apos;un fichier.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2832"/>
        <source>Verify a signature on the contents of a file.</source>
        <translation>Vérifier la signature du contenu d&apos;un fichier.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2840"/>
        <source>Import a signed key images list and verify their spent status.</source>
        <translation>Importer un ensemble signé d&apos;images de clé et vérifier si elles correspondent à des dépenses.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2852"/>
        <source>Export a set of outputs owned by this wallet.</source>
        <translation>Exporter un ensemble de sorties possédées par ce portefeuille.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2856"/>
        <source>Import a set of outputs owned by this wallet.</source>
        <translation>Importer un ensemble de sorties possédées par ce portefeuille.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2860"/>
        <source>Show information about a transfer to/from this address.</source>
        <translation>Afficher les information à propos d&apos;un transfert vers/depuis cette adresse.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2863"/>
        <source>Change the wallet&apos;s password.</source>
        <translation>Changer le mot de passe du portefeuille.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2870"/>
        <source>Print the information about the current fee and transaction backlog.</source>
        <translation>Afficher les informations à propos des frais et arriéré de transactions actuels.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2872"/>
        <source>Export data needed to create a multisig wallet</source>
        <translation>Exporter les données nécessaires pour créer un portefeuille multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2875"/>
        <source>Turn this wallet into a multisig wallet</source>
        <translation>Transformer ce portefeuille en portefeuille multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2879"/>
        <source>Turn this wallet into a multisig wallet, extra step for N-1/N wallets</source>
        <translation>Transformer ce portefeuille en portefeuille multisig, étape supplémentaire pour les portefeuilles N-1/N</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2887"/>
        <source>Export multisig info for other participants</source>
        <translation>Exporter les infos multisig pour les autres participants</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2891"/>
        <source>Import multisig info from other participants</source>
        <translation>Importer les infos multisig des autres participants</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2895"/>
        <source>Sign a multisig transaction from a file</source>
        <translation>Signer une transaction multisig d&apos;un fichier</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2899"/>
        <source>Submit a signed multisig transaction from a file</source>
        <translation>Transmettre une transaction multisig signée d&apos;un fichier</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2903"/>
        <source>Export a signed multisig transaction to a file</source>
        <translation>Exporter une transaction multisig signée vers un fichier</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3020"/>
        <source>Show the help section or the documentation about a &lt;command&gt;.</source>
        <translation>Afficher la section d&apos;aide ou la documentation d&apos;une &lt;commande&gt;.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3103"/>
        <source>integer &gt;= </source>
        <translation>entier &gt;= </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3116"/>
        <source>block height</source>
        <translation>hauteur de bloc</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3221"/>
        <source>No wallet found with that name. Confirm creation of new wallet named: </source>
        <translation>Aucun portefeuille avec ce nom trouvé. Confirmer la création d&apos;un nouveau portefeuille nommé&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3344"/>
        <source>can&apos;t specify both --restore-deterministic-wallet or --restore-multisig-wallet and --non-deterministic</source>
        <translation>impossible de spécifier à la fois --restore-deterministic-wallet ou --restore-multisig-wallet et --non-deterministic</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3350"/>
        <source>--restore-multisig-wallet uses --generate-new-wallet, not --wallet-file</source>
        <translation>--restore-multisig-wallet utilise --generate-new-wallet, pas --wallet-file</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3366"/>
        <source>specify a recovery parameter with the --electrum-seed=&quot;multisig seed here&quot;</source>
        <translation>spécifiez un paramètre de récupération avec --electrum-seed=&quot;phrase mnémonique multisig ici&quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3395"/>
        <source>Multisig seed failed verification</source>
        <translation>Échec de la vérification de la phrase mnémonique multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3446"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3521"/>
        <source>This address is a subaddress which cannot be used here.</source>
        <translation>Cette adresse est une sous-adresse qui ne peut pas être utilisée ici.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3598"/>
        <source>Error: expected M/N, but got: </source>
        <translation>Erreur&#xa0;: M/N attendu, mais lu&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3603"/>
        <source>Error: expected N &gt; 1 and N &lt;= M, but got: </source>
        <translation>Erreur&#xa0;: N &gt; 1 et N &lt;= M attendu, mais lu&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3608"/>
        <source>Error: M/N is currently unsupported. </source>
        <translation>Erreur&#xa0;: M/N n&apos;est actuellement pas supporté. </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3611"/>
        <source>Generating master wallet from %u of %u multisig wallet keys</source>
        <translation>Génération du portefeuille principal à partir de %u de %u clés de portefeuille multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3640"/>
        <source>failed to parse secret view key</source>
        <translation>échec de l&apos;analyse de la clé secrète d&apos;audit</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3648"/>
        <source>failed to verify secret view key</source>
        <translation>échec de la vérification de la clé secrète d&apos;audit</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3691"/>
        <source>Error: M/N is currently unsupported</source>
        <translation>Erreur&#xa0;: M/N n&apos;est actuellement pas supporté</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3854"/>
        <source>Restore height </source>
        <translation>Hauteur de restauration </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3881"/>
        <source>Warning: using an untrusted daemon at %s, privacy will be lessened</source>
        <translation>Attention&#xa0;: en n&apos;utilisant %s qui n&apos;est pas un démon de confiance, la confidentialité sera réduite</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3950"/>
        <source>Daemon either is not started or wrong port was passed. Please make sure daemon is running or change the daemon address using the &apos;set_daemon&apos; command.</source>
        <translation>Le démon n&apos;est pas lancé ou un mauvais port a été fourni. Veuillez vous assurer que le démon fonctionne ou changez l&apos;adresse de démon avec la commande &apos;set_daemon&apos;.</translation>
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
        <translation>Votre portefeuille a été généré !
Pour commencer la synchronisation avec le démon, utilisez la commande &quot;refresh&quot;.
Utilisez la commande &quot;help&quot; pour voir la liste des commandes disponibles.
Utilisez &quot;help &lt;commande&gt;&quot; pour voir la documentation d&apos;une commande.
Utilisez toujours la commande &quot;exit&quot; pour fermer monero-wallet-cli pour sauvegarder 
l&apos;état de votre session. Sinon, vous pourriez avoir besoin de synchroniser 
votre portefeuille à nouveau (mais les clés de votre portefeuille ne risquent rien).
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4242"/>
        <source>failed to generate new mutlisig wallet</source>
        <translation>échec de la génération du nouveau portefeuille multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4245"/>
        <source>Generated new %u/%u multisig wallet: </source>
        <translation>Nouveau portefeuille multisig %u/%u généré&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4294"/>
        <source>Opened %u/%u multisig wallet%s</source>
        <translation>Portefeuille multisig %u/%u ouvert%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4355"/>
        <source>Use &quot;help &lt;command&gt;&quot; to see a command&apos;s documentation.
</source>
        <translation>Utilisez &quot;help &lt;commande&gt;&quot; pour voir la documentation d&apos;une commande.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4413"/>
        <source>wallet is multisig and cannot save a watch-only version</source>
        <translation>c&apos;est un portefeuille multisig et il ne peut pas sauvegarder une version d&apos;audit</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4538"/>
        <source>Unexpected array length - Exited simple_wallet::set_daemon()</source>
        <translation>Taille de tableau inattendue - Sortie de simple_wallet::set_daemon()</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4579"/>
        <source>This does not seem to be a valid daemon URL.</source>
        <translation>Ceci semble ne pas être une URL de démon valide.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4615"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4648"/>
        <source>txid </source>
        <translation>ID transaction </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4617"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4650"/>
        <source>idx </source>
        <translation>index </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4838"/>
        <source> (Some owned outputs have partial key images - import_multisig_info needed)</source>
        <translation> (Certaines sorties ont des images de clé partielles - import_multisig_info requis)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4841"/>
        <source>Currently selected account: [</source>
        <translation>Compte actuellement sélectionné&#xa0;: [</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4841"/>
        <source>] </source>
        <translation>] </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4843"/>
        <source>Tag: </source>
        <translation>Mot clé&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4843"/>
        <source>(No tag assigned)</source>
        <translation>(Pas de mot clé assigné)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4850"/>
        <source>Balance per address:</source>
        <translation>Solde par adresse&#xa0;:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4851"/>
        <source>Address</source>
        <translation>Adresse</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4851"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8066"/>
        <source>Balance</source>
        <translation>Solde</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4851"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8066"/>
        <source>Unlocked balance</source>
        <translation>Solde débloqué</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4851"/>
        <source>Outputs</source>
        <translation>Sorties</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4851"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8066"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9183"/>
        <source>Label</source>
        <translation>Étiquette</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4859"/>
        <source>%8u %6s %21s %21s %7u %21s</source>
        <translation>%8u %6s %21s %21s %7u %21s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4952"/>
        <source>spent</source>
        <translation>dépensé</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4952"/>
        <source>global index</source>
        <translation>index global</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4952"/>
        <source>tx id</source>
        <translation>ID de transaction</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4952"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5014"/>
        <source>addr index</source>
        <translation>index adresse</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4982"/>
        <source>No incoming transfers</source>
        <translation>Aucun transfert entrant</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4986"/>
        <source>No incoming available transfers</source>
        <translation>Aucun transfert entrant disponible</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4990"/>
        <source>No incoming unavailable transfers</source>
        <translation>Aucun transfert entrant non disponible</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5014"/>
        <source>payment</source>
        <translation>paiement</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5014"/>
        <source>transaction</source>
        <translation>transaction</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5014"/>
        <source>height</source>
        <translation>hauteur</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5014"/>
        <source>unlock time</source>
        <translation>durée de déverrouillage</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5026"/>
        <source>No payments with id </source>
        <translation>Aucun paiement avec l&apos;ID </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5074"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5164"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5493"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5952"/>
        <source>failed to get blockchain height: </source>
        <translation>échec de la récupération de la hauteur de la chaîne de blocs&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5172"/>
        <source>
Transaction %llu/%llu: txid=%s</source>
        <translation>
Transaction %llu/%llu&#xa0;: ID=%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5193"/>
        <source>
Input %llu/%llu: amount=%s</source>
        <translation>
Entrée %llu/%llu&#xa0;: montant=%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5209"/>
        <source>failed to get output: </source>
        <translation>échec de la récupération de la sortie&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5217"/>
        <source>output key&apos;s originating block height shouldn&apos;t be higher than the blockchain height</source>
        <translation>la hauteur du bloc d&apos;origine de la clé de la sortie ne devrait pas être supérieure à celle de la chaîne de blocs</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5221"/>
        <source>
Originating block heights: </source>
        <translation>
Hauteurs des blocs d&apos;origine&#xa0;: </translation>
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
Attention&#xa0;: Certaines clés d&apos;entrées étant dépensées sont issues de </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5252"/>
        <source>, which can break the anonymity of ring signature. Make sure this is intentional!</source>
        <translation>, ce qui peut casser l&apos;anonymat du cercle de signature. Assurez-vous que c&apos;est intentionnel !</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5292"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5904"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6197"/>
        <source>Ring size must not be 0</source>
        <translation>La taille de cercle ne doit pas être 0</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5304"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5916"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6209"/>
        <source>ring size %u is too small, minimum is %u</source>
        <translation>la taille de cercle %u est trop petite, le minimum est %u</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5316"/>
        <source>wrong number of arguments</source>
        <translation>mauvais nombre d&apos;arguments</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5509"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6057"/>
        <source>No outputs found, or daemon is not ready</source>
        <translation>Aucune sortie trouvée, ou le démon n&apos;est pas prêt</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6466"/>
        <source>Failed to parse donation address: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6482"/>
        <source>Donating %s %s to %s.</source>
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
        <location filename="../src/simplewallet/simplewallet.cpp" line="7807"/>
        <source>MMS received new message</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8618"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8664"/>
        <source>command only supported by HW wallet</source>
        <translation>commande supportée uniquement par un portefeuille matériel</translation>
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
        <translation type="unfinished">Échec de l&apos;importation des images de clé&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8673"/>
        <source>Failed to reconnect device</source>
        <translation>Échec de la reconnexion à l&apos;appareil</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8678"/>
        <source>Failed to reconnect device: </source>
        <translation>Échec de la reconnexion à l&apos;appareil : </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8942"/>
        <source>Transaction successfully saved to </source>
        <translation>Transaction sauvegardée avec succès dans </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8942"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8944"/>
        <source>, txid </source>
        <translation>, ID transaction </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8944"/>
        <source>Failed to save transaction to </source>
        <translation>Échec de la sauvegarde de la transaction dans </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6664"/>
        <source>This is a watch only wallet</source>
        <translation>Ceci est un portefeuille d&apos;audit</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8872"/>
        <source>Double spend seen on the network: this transaction may or may not end up being mined</source>
        <translation>Double dépense détectée sur le réseau&#xa0;: cette transaction sera peut-être invalidée</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8907"/>
        <source>Transaction ID not found</source>
        <translation>ID de transaction non trouvé</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="349"/>
        <source>true</source>
        <translation>vrai</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="402"/>
        <source>failed to parse refresh type</source>
        <translation>échec de l&apos;analyse du type de rafraîchissement</translation>
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
        <translation>commande non supportée par le portefeuille matériel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="739"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="810"/>
        <source>wallet is watch-only and has no seed</source>
        <translation>c&apos;est un portefeuille d&apos;audit et il n&apos;a pas de phrase mnémonique</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="757"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="820"/>
        <source>wallet is non-deterministic and has no seed</source>
        <translation>c&apos;est un portefeuille non déterministe et il n&apos;a pas de phrase mnémonique</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="764"/>
        <source>Enter optional seed offset passphrase, empty to see raw seed</source>
        <translation>Entrer une phrase de passe facultative pour le décalage de la phrase mnémonique, effacer pour voir la phrase mnémonique brute</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="830"/>
        <source>Incorrect password</source>
        <translation>Mot de passe invalide</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="898"/>
        <source>Current fee is %s %s per %s</source>
        <translation>Les frais sont actuellement de %s %s par %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1647"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1804"/>
        <source>Invalid key image</source>
        <translation>Image de clé invalide</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1653"/>
        <source>Invalid txid</source>
        <translation>ID de transaction invalide</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1665"/>
        <source>Key image either not spent, or spent with mixin 0</source>
        <translation>Image de clé soit non dépensée, soit dépensée avec 0 mélange</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1680"/>
        <source>Failed to get key image ring: </source>
        <translation>Échec de la récupération du cercle de l&apos;image de clé : </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1695"/>
        <source>File doesn&apos;t exist</source>
        <translation>Le fichier d&apos;existe pas</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1717"/>
        <source>Invalid ring specification: </source>
        <translation>Spécification de cercle invalide : </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1725"/>
        <source>Invalid key image: </source>
        <translation>Image de clé invalide : </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1730"/>
        <source>Invalid ring type, expected relative or abosolute: </source>
        <translation>Type de cercle invalide, &quot;relative&quot; ou &quot;absolute&quot; attendu : </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1736"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1748"/>
        <source>Error reading line: </source>
        <translation>Erreur lors de la lecture de la ligne : </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1759"/>
        <source>Invalid ring: </source>
        <translation>Cercle invalide : </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1768"/>
        <source>Invalid relative ring: </source>
        <translation>Cercle relatif invalide : </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1780"/>
        <source>Invalid absolute ring: </source>
        <translation>Cercle absolu invalide : </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1789"/>
        <source>Failed to set ring for key image: </source>
        <translation>Échec de l&apos;affectation du cercle pour l&apos;image de clé : </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1789"/>
        <source>Continuing.</source>
        <translation>On continue.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1819"/>
        <source>Missing absolute or relative keyword</source>
        <translation>Mot clé &quot;absolute&quot; ou &quot;relative&quot; manquant</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1829"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1836"/>
        <source>invalid index: must be a strictly positive unsigned integer</source>
        <translation>index invalide : doit être un nombre entier strictement positif</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1844"/>
        <source>invalid index: indices wrap</source>
        <translation>index invalide : boucle des indices</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1854"/>
        <source>invalid index: indices should be in strictly ascending order</source>
        <translation>index invalide : les indices doivent être en ordre strictement croissant</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1861"/>
        <source>failed to set ring</source>
        <translation>échec de l&apos;affectation du cercle</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1906"/>
        <source>First line is not an amount</source>
        <translation>La première ligne n&apos;est pas un montant</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1920"/>
        <source>Invalid output: </source>
        <translation>Sortie invalide : </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1930"/>
        <source>Bad argument: </source>
        <translation>Mauvais argument : </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1930"/>
        <source>should be &quot;add&quot;</source>
        <translation>devrait être &quot;add&quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1939"/>
        <source>Failed to open file</source>
        <translation>Échec de l&apos;ouverture du fichier</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1945"/>
        <source>Invalid output key, and file doesn&apos;t exist</source>
        <translation>Clé de sortie invalide, et le fichier n&apos;existe pas</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1968"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1995"/>
        <source>Invalid output</source>
        <translation>Sortie invalide</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2023"/>
        <source>Failed to save known rings: </source>
        <translation>Échec de la sauvegarde des cercles connus : </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2085"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2104"/>
        <source>wallet is watch-only and cannot transfer</source>
        <translation>c&apos;est un portefeuille d&apos;audit et il ne peut pas transférer</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2122"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5632"/>
        <source>WARNING: this is a non default ring size, which may harm your privacy. Default is recommended.</source>
        <translation>ATTENTION : ceci c&apos;est pas la taille de cercle par défaut, ce qui peut nuire à votre confidentialité. La valeur par défaut est recommandée.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2124"/>
        <source>WARNING: from v8, ring size will be fixed and this setting will be ignored.</source>
        <translation>ATTENTION : ) partir de v8, la taille de cercle sera fixée et ce paramètre sera ignoré.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2153"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2176"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2192"/>
        <source>priority must be either 0, 1, 2, 3, or 4, or one of: </source>
        <translation>la priorité doit être 0, 1, 2, 3, 4 ou l&apos;une de : </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2197"/>
        <source>could not change default priority</source>
        <translation>échec du changement de la priorité par défaut</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2267"/>
        <source>invalid argument: must be either 0/never, 1/action, or 2/encrypt/decrypt</source>
        <translation>argument invalide : doit être soit 0/never, 1/action, ou 2/encrypt/decrypt</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2613"/>
        <source>Transfer &lt;amount&gt; to &lt;address&gt;. If the parameter &quot;index=&lt;N1&gt;[,&lt;N2&gt;,...]&quot; is specified, the wallet uses outputs received by addresses of those indices. If omitted, the wallet randomly chooses address indices to be used. In any case, it tries its best not to combine outputs across multiple addresses. &lt;priority&gt; is the priority of the transaction. The higher the priority, the higher the transaction fee. Valid values in priority order (from lowest to highest) are: unimportant, normal, elevated, priority. If omitted, the default value (see the command &quot;set priority&quot;) is used. &lt;ring_size&gt; is the number of inputs to include for untraceability. Multiple payments can be made at once by adding URI_2 or &lt;address_2&gt; &lt;amount_2&gt; etcetera (before the payment ID, if it&apos;s included)</source>
        <translation>Transférer &lt;montant&gt; à &lt;adresse&gt; Si le paramètre &quot;index=&lt;N1&gt;[,&lt;N2&gt;,...]&quot; est spécifié, le portefeuille utilise les sorties reçues par les adresses de ces indices. Si il est omis, le portefeuille choisit les indices d&apos;adresse à utiliser aléatoirement. Dans tous les cas, il essaye de ne pas combiner des sorties de multiples adresses. &lt;priorité&gt; est la priorité de la transaction. Plus la priorité est haute, plus les frais de transaction sont élévés. Les valeurs valides par ordre de priorité (de la plus basse à la plus haute) sont&#xa0;: unimportant, normal, elevated, priority. Si elle est omise, la valeur par défaut (voir la commande &quot;set priority&quot;) est utilisée. &lt;taille_cercle&gt; est le nombre d&apos;entrées à inclure pour l&apos;intraçabilité. De multiples paiements peuvent être réalisés d&apos;un coup en ajoutant &lt;URI_2&gt; ou &lt;adresse_2&gt; &lt;montant_2&gt; et cetera (avant l&apos;ID de paiement, si il est inclus)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2617"/>
        <source>Transfer &lt;amount&gt; to &lt;address&gt; and lock it for &lt;lockblocks&gt; (max. 1000000). If the parameter &quot;index=&lt;N1&gt;[,&lt;N2&gt;,...]&quot; is specified, the wallet uses outputs received by addresses of those indices. If omitted, the wallet randomly chooses address indices to be used. In any case, it tries its best not to combine outputs across multiple addresses. &lt;priority&gt; is the priority of the transaction. The higher the priority, the higher the transaction fee. Valid values in priority order (from lowest to highest) are: unimportant, normal, elevated, priority. If omitted, the default value (see the command &quot;set priority&quot;) is used. &lt;ring_size&gt; is the number of inputs to include for untraceability. Multiple payments can be made at once by adding URI_2 or &lt;address_2&gt; &lt;amount_2&gt; etcetera (before the payment ID, if it&apos;s included)</source>
        <translation>Transférer &lt;montant&gt; à &lt;adresse&gt; et le verrouiller pendant &lt;blocs_verrou&gt; (max 1000000). Si le paramètre &quot;index=&lt;N1&gt;[,&lt;N2&gt;,...]&quot; est spécifié, le portefeuille utilise les sorties reçues par les adresses de ces indices. Si il est omis, le portefeuille choisit les indices d&apos;adresse à utiliser aléatoirement. Dans tous les cas, il essaye de ne pas combiner des sorties de multiples adresses. &lt;priorité&gt; est la priorité de la transaction. Plus la priorité est haute, plus les frais de transaction sont élévés. Les valeurs valides par ordre de priorité (de la plus basse à la plus haute) sont&#xa0;: unimportant, normal, elevated, priority. Si elle est omise, la valeur par défaut (voir la commande &quot;set priority&quot;) est utilisée. &lt;taille_cercle&gt; est le nombre d&apos;entrées à inclure pour l&apos;intraçabilité. De multiples paiements peuvent être réalisés d&apos;un coup en ajoutant &lt;URI_2&gt; ou &lt;adresse_2&gt; &lt;montant_2&gt; et cetera (avant l&apos;ID de paiement, si il est inclus)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2621"/>
        <source>Send all unlocked balance to an address and lock it for &lt;lockblocks&gt; (max. 1000000). If the parameter &quot;index&lt;N1&gt;[,&lt;N2&gt;,...]&quot; is specified, the wallet sweeps outputs received by those address indices. If omitted, the wallet randomly chooses an address index to be used. &lt;priority&gt; is the priority of the sweep. The higher the priority, the higher the transaction fee. Valid values in priority order (from lowest to highest) are: unimportant, normal, elevated, priority. If omitted, the default value (see the command &quot;set priority&quot;) is used. &lt;ring_size&gt; is the number of inputs to include for untraceability.</source>
        <translation>Transférer tout le solde débloqué à une adresse et le verrouiller pendant &lt;blocs_verrou&gt; (max 1000000). Si le paramètre &quot;index=&lt;N1&gt;[,&lt;N2&gt;,...]&quot; est spécifié, le portefeuille utilise les sorties reçues par ces indices d&apos;adresse. Si il est omis, le portefeuille choisit un index d&apos;adresse à utiliser aléatoirement. &lt;priorité&gt; est la priorité du balayage. Plus la priorité est haute, plus les frais de transaction sont élévés. Les valeurs valides par ordre de priorité (de la plus basse à la plus haute) sont&#xa0;: unimportant, normal, elevated, priority. Si elle est omise, la valeur par défaut (voir la commande &quot;set priority&quot;) est utilisée. &lt;taille_cercle&gt; est le nombre d&apos;entrées à inclure pour l&apos;intraçabilité.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2627"/>
        <source>Send all unlocked balance to an address. If the parameter &quot;index&lt;N1&gt;[,&lt;N2&gt;,...]&quot; is specified, the wallet sweeps outputs received by those address indices. If omitted, the wallet randomly chooses an address index to be used. If the parameter &quot;outputs=&lt;N&gt;&quot; is specified and  N &gt; 0, wallet splits the transaction into N even outputs.</source>
        <translation>Envoyer tout le solde débloqué à une adresse. Si le paramètre &quot;index&lt;N1&gt;[,&lt;N2&gt;,...]&quot; est spécifié, le portefeuille balaye les sorties reçues par ces indices d&apos;adresse. Si il est omis, le portefeuille choisit un index d&apos;adresse à utiliser aléatoirement. Si le paramètre &quot;outputs=&lt;N&gt;&quot; est spécifié et N &gt; 0, le portefeuille scinde la transaction en N sorties égales.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2643"/>
        <source>Sign a transaction from a file. If the parameter &quot;export_raw&quot; is specified, transaction raw hex data suitable for the daemon RPC /sendrawtransaction is exported.</source>
        <translation>Signer une transaction à partir d&apos;un fichier. Si le paramètre &quot;export_raw&quot; est spécifié, les données brutes hexadécimales adaptées au RPC /sendrawtransaction du démon sont exportées.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2664"/>
        <source>If no arguments are specified or &lt;index&gt; is specified, the wallet shows the default or specified address. If &quot;all&quot; is specified, the wallet shows all the existing addresses in the currently selected account. If &quot;new &quot; is specified, the wallet creates a new address with the provided label text (which can be empty). If &quot;label&quot; is specified, the wallet sets the label of the address specified by &lt;index&gt; to the provided label text.</source>
        <translation>Si aucun argument n&apos;est spécifié ou si &lt;index&gt; est spécifié, le portefeuille affiche l&apos;adresse par défaut ou l&apos;adresse spécifiée. Si &quot;all&quot; est spécifié, le portefeuille affiche toutes les adresses existantes dans le comptes actuellement sélectionné. Si &quot;new&quot; est spécifié, le portefeuille crée une nouvelle adresse avec le texte d&apos;étiquette fourni (qui peut être vide). Si &quot;label&quot; est spécifié, le portefeuille affecte le texte fourni à l&apos;étiquette de l&apos;adresse spécifiée par &lt;index&gt;.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2748"/>
        <source>Set the transaction key (r) for a given &lt;txid&gt; in case the tx was made by some other device or 3rd party wallet.</source>
        <translation>Définir la clé de transaction (r) pour un &lt;ID_transaction&gt; donné au cas où cette clé ait été créée par un appareil ou portefeuille tiers.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2848"/>
        <source>Attempts to reconnect HW wallet.</source>
        <translation>Essayer de se reconnecter à un portefeuille matériel.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2990"/>
        <source>Print the ring(s) used to spend a given key image or transaction (if the ring size is &gt; 1)

Output format:
Key Image, &quot;absolute&quot;, list of rings</source>
        <translation type="unfinished">Afficher le(s) cercle(s) utilisé(s) pour dépenser une image de clé ou une transaction (si la taille de cercle est &gt; 1)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2996"/>
        <source>Set the ring used for a given key image, so it can be reused in a fork</source>
        <translation>Définir le cercle utilisé pour une image de clé donnée, afin de pouvoir le réutiliser dans un fork</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3000"/>
        <source>Save known rings to the shared rings database</source>
        <translation>Sauvegarder les cercles connus dans la base de données des cercles partagés</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3016"/>
        <source>Returns version information</source>
        <translation>Retourne les informations de version</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3105"/>
        <source>full (slowest, no assumptions); optimize-coinbase (fast, assumes the whole coinbase is paid to a single address); no-coinbase (fastest, assumes we receive no coinbase transaction), default (same as optimize-coinbase)</source>
        <translation>full (le plus lent, aucune supposition); optimize-coinbase (rapide, suppose que la récompense de bloc est payée à une unique adresse); no-coinbase (le plus rapide, suppose que l&apos;on ne reçoit aucune récompense de bloc), default (comme optimize-coinbase)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3106"/>
        <source>0, 1, 2, 3, or 4, or one of </source>
        <translation>0, 1, 2, 3, 4 ou l&apos;une de </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3108"/>
        <source>0|1|2 (or never|action|decrypt)</source>
        <translation>0|1|2 (ou never|action|decrypt)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3109"/>
        <source>monero, millinero, micronero, nanonero, piconero</source>
        <translation>monero, millinero, micronero, nanonero, piconero</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3120"/>
        <source>&lt;major&gt;:&lt;minor&gt;</source>
        <translation>&lt;majeur&gt;:&lt;mineur&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3184"/>
        <source>Wallet name not valid. Please try again or use Ctrl-C to quit.</source>
        <translation>Nom de portefeuille non valide. Veuillez réessayer ou utilisez Ctrl-C pour quitter.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3201"/>
        <source>Wallet and key files found, loading...</source>
        <translation>Fichier portefeuille et fichier de clés trouvés, chargement...</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3207"/>
        <source>Key file found but not wallet file. Regenerating...</source>
        <translation>Fichier de clés trouvé mais pas le fichier portefeuille. Régénération...</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3213"/>
        <source>Key file not found. Failed to open wallet: </source>
        <translation>Fichier de clés non trouvé. Échec de l&apos;ouverture du portefeuille&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3232"/>
        <source>Generating new wallet...</source>
        <translation>Génération du nouveau portefeuille...</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3313"/>
        <source>Can&apos;t specify more than one of --testnet and --stagenet</source>
        <translation>Impossible de spécifier plus d&apos;une option parmis --testnet et --stagenet</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3325"/>
        <source>can&apos;t specify more than one of --generate-new-wallet=&quot;wallet_name&quot;, --wallet-file=&quot;wallet_name&quot;, --generate-from-view-key=&quot;wallet_name&quot;, --generate-from-spend-key=&quot;wallet_name&quot;, --generate-from-keys=&quot;wallet_name&quot;, --generate-from-multisig-keys=&quot;wallet_name&quot;, --generate-from-json=&quot;jsonfilename&quot; and --generate-from-device=&quot;wallet_name&quot;</source>
        <translation>impossible de spécifier plus d&apos;une option parmis --generate-new-wallet=&quot;nom_portefeuille&quot;, --wallet-file=&quot;nom_portefeuille&quot;, --generate-from-view-key=&quot;nom_portefeuille&quot;, --generate-from-spend-key=&quot;nom_portefeuille&quot;, --generate-from-keys=&quot;nom_portefeuille&quot;, --generate-from-multisig-keys=&quot;nom_portefeuille&quot;, --generate-from-json=&quot;nom_fichier_json&quot; et --generate-from-device=&quot;nom_portefeuille&quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3404"/>
        <source>Electrum-style word list failed verification</source>
        <translation>Échec de la vérification de la liste de mots de style Electrum</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3409"/>
        <source>Enter seed offset passphrase, empty if none</source>
        <translation>Entrer une phrase de passe pour le décalage de la phrase mnémonique, vide si aucun</translation>
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
        <translation>Pas de données fournies, annulation</translation>
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
        <translation>échec de l&apos;analyse de l&apos;adresse</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3461"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3551"/>
        <source>failed to parse view key secret key</source>
        <translation>échec de l&apos;analyse de la clé secrète d&apos;audit</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3470"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3568"/>
        <source>failed to verify view key secret key</source>
        <translation>échec de la vérification de la clé secrète d&apos;audit</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3474"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3572"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3653"/>
        <source>view key does not match standard address</source>
        <translation>la clé d&apos;audit ne correspond pas à l&apos;adresse standard</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3479"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3499"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3576"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3709"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3735"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3766"/>
        <source>account creation failed</source>
        <translation>échec de la création du compte</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3495"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3536"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3678"/>
        <source>failed to parse spend key secret key</source>
        <translation>échec de l&apos;analyse de la clé secrète de dépense</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3560"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3698"/>
        <source>failed to verify spend key secret key</source>
        <translation>échec de la vérification de la clé secrète de dépense</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3564"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3703"/>
        <source>spend key does not match standard address</source>
        <translation>la clé de dépense ne correspond pas à l&apos;adresse standard</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3741"/>
        <source>No restore height is specified.</source>
        <translation>Aucune hauteur de restauration n&apos;est spécifiée.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3742"/>
        <source>Assumed you are creating a new account, restore will be done from current estimated blockchain height.</source>
        <translation>Nous supposons que vous créez un nouveau compte, la restauration sera faite à partir d&apos;une hauteur de la chaîne de blocs estimée.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3747"/>
        <source>account creation aborted</source>
        <translation>création du compte annulée</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3868"/>
        <source>can&apos;t specify --subaddress-lookahead and --wallet-file at the same time</source>
        <translation>Impossible de spécifier --subaddress-lookahead et --wallet-file en même temps</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3872"/>
        <source>failed to open account</source>
        <translation>échec de l&apos;ouverture du compte</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3876"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4453"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4506"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4591"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6907"/>
        <source>wallet is null</source>
        <translation>portefeuille est nul</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3884"/>
        <source>Failed to initialize ring database: privacy enhancing features will be inactive</source>
        <translation>Impossible d&apos;initialiser la base de données des cercles : les fonctions d&apos;amélioration de la confidentialité seront inactives</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3979"/>
        <source>If your display freezes, exit blind with ^C, then run again with --use-english-language-names</source>
        <translation>Si votre affichage se bloque, quittez en aveugle avec ^C, puis lancer à nouveau en utilisant --use-english-language-names</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3997"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4002"/>
        <source>invalid language choice entered. Please try again.
</source>
        <translation>choix de langue passé invalide. Veuillez réessayer.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4081"/>
        <source>View key: </source>
        <translation>Clé d&apos;audit&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4192"/>
        <source>Generated new wallet on hw device: </source>
        <translation>Nouveau portefeuille généré sur l&apos;appareil : </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4271"/>
        <source>Key file not found. Failed to open wallet</source>
        <translation>Fichier des clés non trouvé. Échec d&apos;ouverture du portefeuille</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4348"/>
        <source>You may want to remove the file &quot;%s&quot; and try again</source>
        <translation>Vous pourriez vouloir supprimer le fichier &quot;%s&quot; et réessayer</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4376"/>
        <source>failed to deinitialize wallet</source>
        <translation>échec de la désinitialisation du portefeuille</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4429"/>
        <source>Watch only wallet saved as: </source>
        <translation>Portefeuille d&apos;audit sauvegardé vers : </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4433"/>
        <source>Failed to save watch only wallet: </source>
        <translation>Échec de la sauvegarde du portefeuille d&apos;audit&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4444"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5082"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8581"/>
        <source>this command requires a trusted daemon. Enable with --trusted-daemon</source>
        <translation>cette commande requiert un démon de confiance. Activer avec --trusted-daemon</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4560"/>
        <source>Expected trusted or untrusted, got </source>
        <translation>&quot;trusted&quot; ou &quot;untrusted&quot; attendu, mais lu </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4577"/>
        <source>trusted</source>
        <translation>de confiance</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4577"/>
        <source>untrusted</source>
        <translation>non fiable</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4601"/>
        <source>blockchain can&apos;t be saved: </source>
        <translation>la chaîne de blocs ne peut pas être sauvegardée&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4666"/>
        <source>Password needed (%s) - use the refresh command</source>
        <translation>Mot de passe requis (%s) - utilisez la commande refresh</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4674"/>
        <source>Enter password</source>
        <translation>Entrez le mot de passe</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4778"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5096"/>
        <source>daemon is busy. Please try again later.</source>
        <translation>le démon est occupé. Veuillez réessayer plus tard.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4782"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5100"/>
        <source>no connection to daemon. Please make sure daemon is running.</source>
        <translation>pas de connexion au démon. Veuillez vous assurer que le démon fonctionne.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4792"/>
        <source>refresh error: </source>
        <translation>erreur du rafraîchissement&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4840"/>
        <source> (Some owned outputs have missing key images - import_key_images needed)</source>
        <translation> (Il manque les images de clé de certaines sorties - import_key_images requis)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4844"/>
        <source>Balance: </source>
        <translation>Solde&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4951"/>
        <source>pubkey</source>
        <translation>clé publique</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4951"/>
        <source>key image</source>
        <translation>image de clé</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4952"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4968"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7575"/>
        <source>unlocked</source>
        <translation>déverrouillé</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4952"/>
        <source>ringct</source>
        <translation>ringct</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4967"/>
        <source>T</source>
        <translation>V</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4967"/>
        <source>F</source>
        <translation>F</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4968"/>
        <source>locked</source>
        <translation>vérrouillé</translation>
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
        <translation>format d&apos;identifiant de paiement invalide, 16 ou 64 caractères hexadécimaux attendus&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5104"/>
        <source>failed to get spent status</source>
        <translation>échec de la récupération du statut de dépense</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5188"/>
        <source>failed to find construction data for tx input</source>
        <translation>échec de la recherche des données pour contruire l&apos;entrée de la transaction</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5251"/>
        <source>the same transaction</source>
        <translation>la même transaction</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5251"/>
        <source>blocks that are temporally very close</source>
        <translation>blocs très proches dans le temps</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5309"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5921"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6214"/>
        <source>ring size %u is too large, maximum is %u</source>
        <translation>la taille de cercle %u est trop grande, le maximum est %u</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5336"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5446"/>
        <source>Unencrypted payment IDs are bad for privacy: ask the recipient to use subaddresses instead</source>
        <translation>Les ID de paiment non chiffrés sont mauvais pour la confidentialité : demandez au bénéficiaire d&apos;utiliser les sous-adresses à la place</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5340"/>
        <source>payment id failed to encode</source>
        <translation>échec de l&apos;encodage de l&apos;ID de paiement</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5387"/>
        <source>failed to parse short payment ID from URI</source>
        <translation>échec de l&apos;analyse de l&apos;ID de paiement court à partir de l&apos;URI</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5412"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5414"/>
        <source>Invalid last argument: </source>
        <translation>Dernier argument invalide : </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5432"/>
        <source>a single transaction cannot use more than one payment id</source>
        <translation>une unique transaction ne peut pas utiliser plus d&apos;un ID de paiement</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5450"/>
        <source>failed to parse payment id, though it was detected</source>
        <translation>échec de l&apos;analyse de l&apos;ID de paiement, bien qu&apos;il ait été détecté</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5826"/>
        <source>Not enough money in unlocked balance</source>
        <translation>Pas assez de fonds dans le solde débloqué</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5930"/>
        <source>missing lockedblocks parameter</source>
        <translation>paramètre blocs_verrou manquant</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5940"/>
        <source>bad locked_blocks parameter</source>
        <translation>mauvais paramètre blocs_verrou</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5965"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6223"/>
        <source>Failed to parse number of outputs</source>
        <translation>Échec de l&apos;analyse du nombre de sorties</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5970"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6228"/>
        <source>Amount of outputs should be greater than 0</source>
        <translation>Le nombre de sorties doit être supérieur à 0</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6480"/>
        <source>Donating %s %s to The Monero Project (donate.getmonero.org or %s).</source>
        <translation>Don de %s %s à The Monero Project (donate.getmonero.org ou %s).</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6812"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6823"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6830"/>
        <source>failed to parse tx_key</source>
        <translation>échec de l&apos;analyse de la clé de transaction</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6839"/>
        <source>Tx key successfully stored.</source>
        <translation>Clé de transaction sauvegardée avec succès.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6843"/>
        <source>Failed to store tx key: </source>
        <translation>Échec de la sauvegarde de la clé de transaction : </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7022"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7132"/>
        <source>Good signature</source>
        <translation>Bonne signature</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7049"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7134"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7234"/>
        <source>Bad signature</source>
        <translation>Mauvaise signature</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7497"/>
        <source>usage: show_transfers [in|out|all|pending|failed|coinbase] [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;min_height&gt; [&lt;max_height&gt;]]</source>
        <translation>usage&#xa0;: show_transfers [in|out|all|pending|failed|coinbase] [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;hauteur_min&gt; [&lt;hauteur_max&gt;]]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7349"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7575"/>
        <source>block</source>
        <translation>bloc</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7787"/>
        <source>Warning: this will lose any information which can not be recovered from the blockchain.</source>
        <translation>Attention : ceci pedra toute information qui ne peut pas être retrouvée à partir de la chaîne de blocs.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7788"/>
        <source>This includes destination addresses, tx secret keys, tx notes, etc</source>
        <translation>Ceci inclut les adresses de destination, les clé secrètes de transaction, les notes de transaction, etc</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8227"/>
        <source>Standard address: </source>
        <translation>Adresse standard&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8232"/>
        <source>failed to parse payment ID or address</source>
        <translation>échec de l&apos;analyse de l&apos;ID de paiement ou de l&apos;adresse</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8274"/>
        <source>failed to parse payment ID</source>
        <translation>échec de l&apos;analyse de l&apos;ID de paiement</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8292"/>
        <source>failed to parse index</source>
        <translation>échec de l&apos;analyse de l&apos;index</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8300"/>
        <source>Address book is empty.</source>
        <translation>Le carnet d&apos;adresses est vide.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8306"/>
        <source>Index: </source>
        <translation>Index&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8307"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8437"/>
        <source>Address: </source>
        <translation>Adresse&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8308"/>
        <source>Payment ID: </source>
        <translation>ID de paiement&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8309"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8436"/>
        <source>Description: </source>
        <translation>Description&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8446"/>
        <source>Network type: </source>
        <translation>Type de réseau : </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8447"/>
        <source>Testnet</source>
        <translation>Testnet</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8448"/>
        <source>Stagenet</source>
        <translation>Stagenet</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8448"/>
        <source>Mainnet</source>
        <translation>Mainnet</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8466"/>
        <source>wallet is watch-only and cannot sign</source>
        <translation>c&apos;est un portefeuille d&apos;audit et il ne peut pas signer</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1305"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8480"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8506"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8743"/>
        <source>failed to read file </source>
        <translation>échec de la lecture du fichier </translation>
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
        <location filename="../src/simplewallet/simplewallet.cpp" line="7011"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7125"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7219"/>
        <source>failed to load signature file</source>
        <translation>échec du chargement du fichier signature</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7073"/>
        <source>wallet is watch-only and cannot generate the proof</source>
        <translation>c&apos;est un portefeuille d&apos;audit et il ne peut générer de preuve</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7157"/>
        <source>The reserve proof can be generated only by a full wallet</source>
        <translation>La preuve de réserve ne peut être généré que par un portefeuille complet</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7212"/>
        <source>Address must not be a subaddress</source>
        <translation>L&apos;adresse ne doit pas être une sous-adresse</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7230"/>
        <source>Good signature -- total: %s, spent: %s, unspent: %s</source>
        <translation>Bonne signature -- total&#xa0;: %s, dépensé&#xa0;: %s, non dépensé&#xa0;: %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7420"/>
        <source>[Double spend seen on the network: this transaction may or may not end up being mined] </source>
        <translation>[Double dépense détectée sur le réseau&#xa0;: cette transaction sera peut-être invalidée] </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7698"/>
        <source>There is no unspent output in the specified address</source>
        <translation>Il n&apos;y a pas de sortie non dépensée pour l&apos;adresse spécifiée</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7857"/>
        <source> (no daemon)</source>
        <translation> (pas de démon)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7859"/>
        <source> (out of sync)</source>
        <translation> (désynchronisé)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7910"/>
        <source>(Untitled account)</source>
        <translation>(compte sans nom)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7923"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7941"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7966"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7989"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8135"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8158"/>
        <source>failed to parse index: </source>
        <translation>échec de l&apos;analyse de l&apos;index&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7928"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8140"/>
        <source>specify an index between 0 and </source>
        <translation>specifiez un index entre 0 et </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8046"/>
        <source>
Grand total:
  Balance: </source>
        <translation>
Somme finale&#xa0;:
  Solde&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8046"/>
        <source>, unlocked balance: </source>
        <translation>, solde débloqué&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8054"/>
        <source>Untagged accounts:</source>
        <translation>Comptes sans mot clé&#xa0;:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8060"/>
        <source>Tag %s is unregistered.</source>
        <translation>Le mot clé %s n&apos;est pas enregistré.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8063"/>
        <source>Accounts with tag: </source>
        <translation>Comptes avec mot clé&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8064"/>
        <source>Tag&apos;s description: </source>
        <translation>Description du mot clé&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8066"/>
        <source>Account</source>
        <translation>Compte</translation>
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
        <translation>Adresse primaire</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8106"/>
        <source>(used)</source>
        <translation>(utilisé)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8127"/>
        <source>(Untitled address)</source>
        <translation>(adresse sans nom)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8167"/>
        <source>&lt;index_min&gt; is already out of bound</source>
        <translation>&lt;index_min&gt; est déjà hors limite</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8172"/>
        <source>&lt;index_max&gt; exceeds the bound</source>
        <translation>&lt;index_max&gt; excède la limite</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8198"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8210"/>
        <source>Integrated addresses can only be created for account 0</source>
        <translation>Les adresses intégrées ne peuvent être créées que pour le compte 0</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8222"/>
        <source>Integrated address: %s, payment ID: %s</source>
        <translation>Adresse intégrée&#xa0;: %s, ID de paiement&#xa0;: %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8227"/>
        <source>Subaddress: </source>
        <translation>Sous-adresse&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8394"/>
        <source>no description found</source>
        <translation>pas de description trouvée</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8396"/>
        <source>description found: </source>
        <translation>description trouvée&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8435"/>
        <source>Filename: </source>
        <translation>Fichier&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8440"/>
        <source>Watch only</source>
        <translation>Audit</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8442"/>
        <source>%u/%u multisig%s</source>
        <translation>Multisig %u/%u%s</translation>
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
        <translation>Type&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8471"/>
        <source>This wallet is multisig and cannot sign</source>
        <translation>C&apos;est un portefeuille multisig et il ne peut pas signer</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8520"/>
        <source>Bad signature from </source>
        <translation>Mauvaise signature de </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8524"/>
        <source>Good signature from </source>
        <translation>Bonne signature de </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8543"/>
        <source>wallet is watch-only and cannot export key images</source>
        <translation>c&apos;est un portefeuille d&apos;audit et il ne peut pas exporter les images de clé</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1244"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8557"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8710"/>
        <source>failed to save file </source>
        <translation>échec de l&apos;enregistrement du fichier </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8568"/>
        <source>Signed key images exported to </source>
        <translation>Images de clé signées exportées vers </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8721"/>
        <source>Outputs exported to </source>
        <translation>Sorties exportées vers </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5402"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6455"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7168"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7657"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7665"/>
        <source>amount is wrong: </source>
        <translation>montant erroné&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5403"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6455"/>
        <source>expected number from 0 to </source>
        <translation>attend un nombre de 0 à </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5772"/>
        <source>Sweeping </source>
        <translation>Balayage de </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6388"/>
        <source>Money successfully sent, transaction: </source>
        <translation>Fonds envoyés avec succès, transaction&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6583"/>
        <source>Change goes to more than one address</source>
        <translation>La monnaie rendue va à plus d&apos;une adresse</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6624"/>
        <source>%s change to %s</source>
        <translation>%s de monnaie rendue à %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6627"/>
        <source>no change</source>
        <translation>sans monnaie rendue</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1451"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1464"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6699"/>
        <source>Transaction successfully signed to file </source>
        <translation>Transaction signée avec succès dans le fichier </translation>
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
        <translation>échec de l&apos;analyse de l&apos;ID de transaction</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6780"/>
        <source>Tx key: </source>
        <translation>Clé de transaction&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6785"/>
        <source>no tx keys found for this txid</source>
        <translation>aucune clé de transaction trouvée pour cet ID de transaction</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6882"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7094"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7183"/>
        <source>signature file saved to: </source>
        <translation>fichier signature sauvegardé dans&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6884"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7096"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7185"/>
        <source>failed to save signature file</source>
        <translation>échec de la sauvegarde du fichier signature</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6921"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6930"/>
        <source>failed to parse tx key</source>
        <translation>échec de l&apos;analyse de la clé de transaction</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6888"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6976"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7054"/>
        <source>error: </source>
        <translation>erreur&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6952"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7025"/>
        <source>received</source>
        <translation>a reçu</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6952"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7025"/>
        <source>in txid</source>
        <translation>dans la transaction</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6971"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7044"/>
        <source>received nothing in txid</source>
        <translation>n&apos;a rien reçu dans la transaction</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6955"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7028"/>
        <source>WARNING: this transaction is not yet included in the blockchain!</source>
        <translation>ATTENTION&#xa0;: cette transaction n&apos;est pas encore inclue dans la chaîne de blocs !</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6961"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7034"/>
        <source>This transaction has %u confirmations</source>
        <translation>Cette transaction a %u confirmations</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6965"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7038"/>
        <source>WARNING: failed to determine number of confirmations!</source>
        <translation>ATTENTION&#xa0;: échec de la détermination du nombre de confirmations !</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7319"/>
        <source>bad min_height parameter:</source>
        <translation>mauvais paramètre hauteur_minimum&#xa0;:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7331"/>
        <source>bad max_height parameter:</source>
        <translation>mauvais paramètre hauteur_maximum&#xa0;:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7349"/>
        <source>in</source>
        <translation>reçu</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7672"/>
        <source>&lt;min_amount&gt; should be smaller than &lt;max_amount&gt;</source>
        <translation>&lt;montant_minimum&gt; doit être inférieur à &lt;montant_maximum&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7704"/>
        <source>
Amount: </source>
        <translation>
Montant&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7704"/>
        <source>, number of keys: </source>
        <translation>, nombre de clés&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7709"/>
        <source> </source>
        <translation> </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7714"/>
        <source>
Min block height: </source>
        <translation>
Hauteur de bloc minimum&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7715"/>
        <source>
Max block height: </source>
        <translation>
Hauteur de bloc maximum&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7716"/>
        <source>
Min amount found: </source>
        <translation>
Montant minimum trouvé&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7717"/>
        <source>
Max amount found: </source>
        <translation>
Montant maximum trouvé&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7718"/>
        <source>
Total count: </source>
        <translation>
Compte total&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7758"/>
        <source>
Bin size: </source>
        <translation>
Taille de classe&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7759"/>
        <source>
Outputs per *: </source>
        <translation>
Sorties par *&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7761"/>
        <source>count
  ^
</source>
        <translation>compte
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
        <translation>+--&gt; hauteur de bloc
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
        <translation>  </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7855"/>
        <source>wallet</source>
        <translation>portefeuille</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="885"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8202"/>
        <source>Random payment ID: </source>
        <translation>ID de paiement aléatoire&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8203"/>
        <source>Matching integrated address: </source>
        <translation>Adresse intégrée correspondante&#xa0;: </translation>
    </message>
</context>
<context>
    <name>genms</name>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="70"/>
        <source>Base filename (-1, -2, etc suffixes will be appended as needed)</source>
        <translation>Nom de fichier de base (des suffixes -1, -2 etc seront ajoutés si nécessaire)</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="71"/>
        <source>Give threshold and participants at once as M/N</source>
        <translation>Indiquer le seuil et les participants sous la forme M/N</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="72"/>
        <source>How many participants will share parts of the multisig wallet</source>
        <translation>Combien de participants partageront des parts du portefeuille multisig</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="73"/>
        <source>How many signers are required to sign a valid transaction</source>
        <translation>Combien de signataires sont requis pour signer une transaction valide</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="74"/>
        <source>Create testnet multisig wallets</source>
        <translation>Créer des portefeuilles multisig testnet</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="75"/>
        <source>Create stagenet multisig wallets</source>
        <translation>Créer des portefeuilles multisig stagenet</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="76"/>
        <source>Create an address file for new wallets</source>
        <translation>Créer un fichier d&apos;adresse pour les nouveaux portefeuilles</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="83"/>
        <source>Generating %u %u/%u multisig wallets</source>
        <translation>Génération de %u portefeuilles multisig %u/%u</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="107"/>
        <source>Failed to verify multisig info</source>
        <translation>Échec de la vérification des infos multisig</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="142"/>
        <source>Error verifying multisig extra info</source>
        <translation>Erreur de vérification des infos multisig supplémentaires</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="153"/>
        <source>Generated multisig wallets for address </source>
        <translation>Portefeuilles multisig générés pour l&apos;adresse </translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="157"/>
        <source>Error creating multisig wallets: </source>
        <translation>Erreur de création des portefeuilles multisig&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="182"/>
        <source>This program generates a set of multisig wallets - use this simpler scheme only if all the participants trust each other</source>
        <translation>Ce programme génère un ensemble de portefeuilles multisig - n&apos;utilisez cette méthode plus simple que si tous les participants se font confiance</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="201"/>
        <source>Error: Can&apos;t specify more than one of --testnet and --stagenet</source>
        <translation>Erreur: Impossible de spécifier plus d&apos;une option parmis --testnet et --stagenet</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="208"/>
        <source>Error: expected N/M, but got: </source>
        <translation>Erreur&#xa0;: N/M attendu, mais lu&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="216"/>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="225"/>
        <source>Error: either --scheme or both of --threshold and --participants may be given</source>
        <translation>Erreur&#xa0;: soit --scheme soit --threshold et --participants doivent être indiqués</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="232"/>
        <source>Error: expected N &gt; 1 and N &lt;= M, but got N==%u and M==%d</source>
        <translation>Erreur&#xa0;: N &gt; 1 et N &lt;= M attendu, mais lu N==%u et M==%d</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="241"/>
        <source>Error: --filename-base is required</source>
        <translation>Erreur&#xa0;: --filename-base est requis</translation>
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
        <translation type="unfinished">reçu</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1386"/>
        <source>out</source>
        <translation type="unfinished">payé</translation>
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
        <translation>Générer un nouveau portefeuille et le sauvegarder dans &lt;arg&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="134"/>
        <source>Generate new wallet from device and save it to &lt;arg&gt;</source>
        <translation>Générer un nouveau portefeuille à partir de l&apos;appareil et le sauvegarder dans &lt;arg&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="135"/>
        <source>Generate incoming-only wallet from view key</source>
        <translation>Générer un portefeuille d&apos;audit à partir d&apos;une clé d&apos;audit</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="136"/>
        <source>Generate deterministic wallet from spend key</source>
        <translation>Générer un portefeuille déterministe à partir d&apos;une clé de dépense</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="137"/>
        <source>Generate wallet from private keys</source>
        <translation>Générer un portefeuille à partir de clés privées</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="138"/>
        <source>Generate a master wallet from multisig wallet keys</source>
        <translation>Générer un portefeuille principal à partir de clés de portefeuille multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="140"/>
        <source>Language for mnemonic</source>
        <translation>Langue de la phrase mnémonique</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="141"/>
        <source>Specify Electrum seed for wallet recovery/creation</source>
        <translation>Spécifier la phrase mnémonique Electrum pour la récupération/création d&apos;un portefeuille</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="142"/>
        <source>Recover wallet using Electrum-style mnemonic seed</source>
        <translation>Récupérer un portefeuille en utilisant une phrase mnémonique de style Electrum</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="143"/>
        <source>Recover multisig wallet using Electrum-style mnemonic seed</source>
        <translation>Récupérer un portefeuille multisig en utilisant une phrase mnémonique de style Electrum</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="144"/>
        <source>Generate non-deterministic view and spend keys</source>
        <translation>Générer des clés d&apos;audit et de dépense non déterministes</translation>
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
        <translation>argument invalide : doit être soit 0/1, true/false, y/n, yes/no</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="430"/>
        <source>DNSSEC validation passed</source>
        <translation>Validation DNSSEC réussie</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="434"/>
        <source>WARNING: DNSSEC validation was unsuccessful, this address may not be correct!</source>
        <translation>ATTENTION: la validation DNSSEC a échoué, cette adresse n&apos;est peut être pas correcte !</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="437"/>
        <source>For URL: </source>
        <translation>Pour l&apos;URL : </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="439"/>
        <source> Monero Address = </source>
        <translation> Adresse Monero = </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="451"/>
        <source>you have cancelled the transfer request</source>
        <translation>vous avez annulé la demande de transfert</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="472"/>
        <source>failed to parse index: </source>
        <translation>échec de l&apos;analyse de l&apos;index&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="485"/>
        <source>invalid format for subaddress lookahead; must be &lt;major&gt;:&lt;minor&gt;</source>
        <translation>format invalide pour l&apos;anticipation des sous-addresses; doit être &lt;majeur&gt;:&lt;mineur&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="502"/>
        <source>no connection to daemon. Please make sure daemon is running.</source>
        <translation>pas de connexion au démon. Veuillez vous assurer que le démon fonctionne.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="507"/>
        <source>RPC error: </source>
        <translation>Erreur RPC&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="511"/>
        <source>failed to get random outputs to mix: </source>
        <translation>échec de la récupération de sorties aléatoires à mélanger&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="518"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="526"/>
        <source>Not enough money in unlocked balance</source>
        <translation>Pas assez de fonds dans le solde débloqué</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="536"/>
        <source>Failed to find a way to create transactions. This is usually due to dust which is so small it cannot pay for itself in fees, or trying to send more money than the unlocked balance, or not leaving enough for fees</source>
        <translation>Impossible de trouver une façon de créer les transactions. Ceci est souvent dû à de la poussière si petite qu&apos;elle ne peut pas payer ses propres frais, ou à une tentative d&apos;envoi d&apos;un montant supérieur au solde débloqué, ou à un montant restant insuffisant pour payer les frais</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="542"/>
        <source>not enough outputs for specified ring size</source>
        <translation>pas assez de sorties pour la taille de cercle spécifiée</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="545"/>
        <source>output amount</source>
        <translation>montant de la sortie</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="545"/>
        <source>found outputs to use</source>
        <translation>sorties à utiliser trouvées</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="547"/>
        <source>Please use sweep_unmixable.</source>
        <translation>Veuillez utiliser sweep_unmixable.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="551"/>
        <source>transaction was not constructed</source>
        <translation>la transaction n&apos;a pas été construite</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="559"/>
        <source>Reason: </source>
        <translation>Raison : </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="568"/>
        <source>one of destinations is zero</source>
        <translation>une des destinations est zéro</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="573"/>
        <source>failed to find a suitable way to split transactions</source>
        <translation>échec de la recherche d&apos;une façon adéquate de scinder les transactions</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="579"/>
        <source>unknown transfer error: </source>
        <translation>erreur de transfert inconnue&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="584"/>
        <source>Multisig error: </source>
        <translation>Erreur multisig&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="590"/>
        <source>internal error: </source>
        <translation>erreur interne&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="595"/>
        <source>unexpected error: </source>
        <translation>erreur inattendue&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="599"/>
        <source>There was an error, which could mean the node may be trying to get you to retry creating a transaction, and zero in on which outputs you own. Or it could be a bona fide error. It may be prudent to disconnect from this node, and not try to send a transaction immediately. Alternatively, connect to another node so the original node cannot correlate information.</source>
        <translation>Il y a eu une erreur, ce qui pourrait signifier que le noeud essaye de vous faire réessayer de créer une transaction, pour tenter d&apos;identifier quelles sorties sont les votres. Ou il pourrait s&apos;agir d&apos;une erreur de bonne foi. Il pourrait être prudent de se déconnecter de ce noeud, et de ne pas essayer d&apos;envoyer une transaction immédiatement. Ou sinon, se connecter à un autre noeud pour que le noeud original ne puisse pas corréler les informations.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="609"/>
        <source>File %s likely stores wallet private keys! Use a different file name.</source>
        <translation>Le fichier %s contient probablement des clés privées de portefeuille ! Utilisez un nom de fichier différent.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7248"/>
        <source> seconds</source>
        <translation> secondes</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7250"/>
        <source> minutes</source>
        <translation> minutes</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7252"/>
        <source> hours</source>
        <translation> heures</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7254"/>
        <source> days</source>
        <translation> jours</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7256"/>
        <source> months</source>
        <translation> mois</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7257"/>
        <source>a long time</source>
        <translation>longtemps</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9001"/>
        <source>This is the command line monero wallet. It needs to connect to a monero
daemon to work correctly.
WARNING: Do not reuse your Monero keys on another fork, UNLESS this fork has key reuse mitigations built in. Doing so will harm your privacy.</source>
        <translation>Ceci est le portefeuille monero en ligne de commande.
Il a besoin de se connecter à un démon monero pour fonctionner correctement.
ATTENTION : Ne réutilisez pas vos clés Monero avec un autre fork, À MOINS QUE ce fork inclue des mitigations contre la réutilisation des clés. Faire ceci nuira à votre confidentialité.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9026"/>
        <source>Unknown command: </source>
        <translation>Commande inconnue&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="145"/>
        <source>Allow communicating with a daemon that uses a different RPC version</source>
        <translation>Autoriser la communication avec un démon utilisant une version de RPC différente</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="146"/>
        <source>Restore from specific blockchain height</source>
        <translation>Restaurer à partir d&apos;une hauteur de bloc spécifique</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="148"/>
        <source>The newly created transaction will not be relayed to the monero network</source>
        <translation>La transaction nouvellement créée ne sera pas transmise au réseau monero</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="149"/>
        <source>Create an address file for new wallets</source>
        <translation>Créer un fichier d&apos;adresse pour les nouveaux portefeuilles</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="151"/>
        <source>Display English language names</source>
        <translation>Afficher les noms de langue en anglais</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="289"/>
        <source>failed to read wallet password</source>
        <translation>échec de la lecture du mot de passe du portefeuille</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="296"/>
        <source>Enter a new password for the wallet</source>
        <translation>Entrer un nouveau mot de passe pour le portefeuille</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="296"/>
        <source>Wallet password</source>
        <translation>Mot de passe du portefeuille</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="306"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="498"/>
        <source>daemon is busy. Please try again later.</source>
        <translation>le démon est occupé. Veuillez réessayer plus tard.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="315"/>
        <source>possibly lost connection to daemon</source>
        <translation>connexion avec le démon peut-être perdue</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="332"/>
        <source>Error: </source>
        <translation>Erreur&#xa0;: </translation>
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
        <translation>Échec de l&apos;initialisation du portefeuille</translation>
    </message>
</context>
<context>
    <name>tools::wallet2</name>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="232"/>
        <source>Use daemon instance at &lt;host&gt;:&lt;port&gt;</source>
        <translation>Utiliser l&apos;instance de démon située à &lt;hôte&gt;:&lt;port&gt;</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="233"/>
        <source>Use daemon instance at host &lt;arg&gt; instead of localhost</source>
        <translation>Utiliser l&apos;instance de démon située à l&apos;hôte &lt;arg&gt; au lieu de localhost</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="237"/>
        <source>Wallet password file</source>
        <translation>Fichier mot de passe du portefeuille</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="238"/>
        <source>Use daemon instance at port &lt;arg&gt; instead of 18081</source>
        <translation>Utiliser l&apos;instance de démon située au port &lt;arg&gt; au lieu de 18081</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="240"/>
        <source>For testnet. Daemon must also be launched with --testnet flag</source>
        <translation>Pour testnet, le démon doit aussi être lancé avec l&apos;option --testnet</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="313"/>
        <source>can&apos;t specify daemon host or port more than once</source>
        <translation>impossible de spécifier l&apos;hôte ou le port du démon plus d&apos;une fois</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="386"/>
        <source>can&apos;t specify more than one of --password and --password-file</source>
        <translation>impossible de spécifier plus d&apos;une option parmis --password et --password-file</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="399"/>
        <source>the password file specified could not be read</source>
        <translation>le fichier mot de passe spécifié n&apos;a pas pu être lu</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="425"/>
        <source>Failed to load file </source>
        <translation>Échec du chargement du fichier </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="236"/>
        <source>Wallet password (escape/quote as needed)</source>
        <translation>Mot de passe du portefeuille (échapper/citer si nécessaire)</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="234"/>
        <source>Enable commands which rely on a trusted daemon</source>
        <translation>Activer les commandes qui dépendent d&apos;un démon de confiance</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="235"/>
        <source>Disable commands which rely on a trusted daemon</source>
        <translation>Désactiver les commandes qui dépendent d&apos;un démon de confiance</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="239"/>
        <source>Specify username[:password] for daemon RPC client</source>
        <translation>Spécifier le nom_utilisateur:[mot_de_passe] pour le client RPC du démon</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="241"/>
        <source>For stagenet. Daemon must also be launched with --stagenet flag</source>
        <translation>Pour stagenet, le démon doit aussi être lancé avec l&apos;option --stagenet</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="243"/>
        <source>Set shared ring database path</source>
        <translation>Définir le chemin de la base de donnée de cercles partagés</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="254"/>
        <source>Number of rounds for the key derivation function</source>
        <translation>Nombre de rondes de la fonction de dérivation de clé</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="255"/>
        <source>HW device to use</source>
        <translation>Portefeuille matériel à utiliser</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="256"/>
        <source>HW device wallet derivation path (e.g., SLIP-10)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="344"/>
        <source>--trusted-daemon and --untrusted-daemon are both seen, assuming untrusted</source>
        <translation>--trusted-daemon et --untrusted-daemon présents simultanément, --untrusted-daemon choisi</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="354"/>
        <source>Daemon is local, assuming trusted</source>
        <translation>Le démon est local, supposons qu&apos;il est de confiance</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="406"/>
        <source>no password specified; use --prompt-for-password to prompt for a password</source>
        <translation>pas de mot de passe spécifié; utilisez --prompt-for-password pour demander un mot de passe</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="408"/>
        <source>Enter a new password for the wallet</source>
        <translation>Entrer un nouveau mot de passe pour le portefeuille</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="408"/>
        <source>Wallet password</source>
        <translation>Mot de passe du portefeuille</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="431"/>
        <source>Failed to parse JSON</source>
        <translation>Échec de l&apos;analyse JSON</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="438"/>
        <source>Version %u too new, we can only grok up to %u</source>
        <translation>Version %u trop récente, on comprend au mieux %u</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="454"/>
        <source>failed to parse view key secret key</source>
        <translation>échec de l&apos;analyse de la clé secrète d&apos;audit</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="459"/>
        <location filename="../src/wallet/wallet2.cpp" line="527"/>
        <location filename="../src/wallet/wallet2.cpp" line="570"/>
        <source>failed to verify view key secret key</source>
        <translation>échec de la vérification de la clé secrète d&apos;audit</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="470"/>
        <source>failed to parse spend key secret key</source>
        <translation>échec de l&apos;analyse de la clé secrète de dépense</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="475"/>
        <location filename="../src/wallet/wallet2.cpp" line="537"/>
        <location filename="../src/wallet/wallet2.cpp" line="596"/>
        <source>failed to verify spend key secret key</source>
        <translation>échec de la vérification de la clé secrète de dépense</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="487"/>
        <source>Electrum-style word list failed verification</source>
        <translation>Échec de la vérification de la liste de mots de style Electrum</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="507"/>
        <source>At least one of either an Electrum-style word list, private view key, or private spend key must be specified</source>
        <translation>Il faut spécifier au moins une des options parmis la liste de mots de style Electrum, la clé privée d&apos;audit et la clé privée de dépense</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="511"/>
        <source>Both Electrum-style word list and private key(s) specified</source>
        <translation>Liste de mots de style Electrum et clé privée spécifiées en même temps</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="521"/>
        <source>invalid address</source>
        <translation>adresse invalide</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="530"/>
        <source>view key does not match standard address</source>
        <translation>la clé d&apos;audit ne correspond pas à l&apos;adresse standard</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="540"/>
        <source>spend key does not match standard address</source>
        <translation>la clé de dépense ne correspond pas à l&apos;adresse standard</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="548"/>
        <source>Cannot generate deprecated wallets from JSON</source>
        <translation>Impossible de générer un portefeuille obsolète à partir de JSON</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="582"/>
        <source>failed to parse address: </source>
        <translation>échec de l&apos;analyse de l&apos;adresse&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="588"/>
        <source>Address must be specified in order to create watch-only wallet</source>
        <translation>L&apos;adresse doit être spécifiée afin de créer un portefeuille d&apos;audit</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="605"/>
        <source>failed to generate new wallet: </source>
        <translation>échec de la génération du nouveau portefeuille&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="1441"/>
        <source>Password is needed to compute key image for incoming monero</source>
        <translation>Le mot de passe est requis pour calculer l&apos;image de clé pour les moneros entrants</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="1442"/>
        <source>Invalid password: password is needed to compute key image for incoming monero</source>
        <translation>Mot de passe invalide : le mot de passe est requis pour calculer l&apos;image de clé pour les moneros entrants</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="3857"/>
        <location filename="../src/wallet/wallet2.cpp" line="4461"/>
        <location filename="../src/wallet/wallet2.cpp" line="5030"/>
        <source>Primary account</source>
        <translation>Compte primaire</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="10336"/>
        <source>No funds received in this tx.</source>
        <translation>Aucun fonds n&apos;a été reçu dans cette transaction.</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="11087"/>
        <source>failed to read file </source>
        <translation>échec de la lecture du fichier </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="150"/>
        <source>Set subaddress lookahead sizes to &lt;major&gt;:&lt;minor&gt;</source>
        <translation>Définir les tailles d&apos;anticipation des sous-addresses à &lt;majeur&gt;:&lt;mineur&gt;</translation>
    </message>
</context>
<context>
    <name>tools::wallet_rpc_server</name>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="180"/>
        <source>Failed to create directory </source>
        <translation>Échec de la création du répertoire </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="182"/>
        <source>Failed to create directory %s: %s</source>
        <translation>Échec de la création du répertoire %s&#xa0;: %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="193"/>
        <source>Cannot specify --</source>
        <translation>Impossible de spécifier --</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="193"/>
        <source> and --</source>
        <translation> et --</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="212"/>
        <source>Failed to create file </source>
        <translation>Échec de la création du fichier </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="212"/>
        <source>. Check permissions or remove file</source>
        <translation>. Vérifiez les permissions ou supprimez le fichier</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="222"/>
        <source>Error writing to file </source>
        <translation>Erreur d&apos;écriture dans le fichier </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="225"/>
        <source>RPC username/password is stored in file </source>
        <translation>nom_utilisateur/mot_de_passe RPC sauvegardé dans le fichier </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="479"/>
        <source>Tag %s is unregistered.</source>
        <translation>Le mot clé %s n&apos;est pas enregistré.</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3083"/>
        <source>Transaction not possible. Available only %s, transaction amount %s = %s + %s (fee)</source>
        <translation>Transaction impossible. Solde disponible&#xa0;: %s, montant de la transaction %s = %s + %s (frais)</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3949"/>
        <source>This is the RPC monero wallet. It needs to connect to a monero
daemon to work correctly.</source>
        <translation>Ceci est le portefeuille monero par RPC. Il a besoin de se
connecter à un démon monero pour fonctionner correctement.</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3790"/>
        <source>Can&apos;t specify more than one of --wallet-file and --generate-from-json</source>
        <translation>Impossible de spécifier plus d&apos;une option parmis --wallet-file et --generate-from-json</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3775"/>
        <source>Can&apos;t specify more than one of --testnet and --stagenet</source>
        <translation>Impossible de spécifier plus d&apos;une option parmis --testnet et --stagenet</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3802"/>
        <source>Must specify --wallet-file or --generate-from-json or --wallet-dir</source>
        <translation>--wallet-file, --generate-from-json ou --wallet-dir doit être spécifié</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3806"/>
        <source>Loading wallet...</source>
        <translation>Chargement du portefeuille...</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3840"/>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3872"/>
        <source>Saving wallet...</source>
        <translation>Sauvegarde du portefeuille...</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3842"/>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3874"/>
        <source>Successfully saved</source>
        <translation>Sauvegardé avec succès</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3845"/>
        <source>Successfully loaded</source>
        <translation>Chargé avec succès</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3849"/>
        <source>Wallet initialization failed: </source>
        <translation>Échec de l&apos;initialisation du portefeuille&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3855"/>
        <source>Failed to initialize wallet RPC server</source>
        <translation>Échec de l&apos;initialisation du serveur RPC du portefeuille</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3859"/>
        <source>Starting wallet RPC server</source>
        <translation>Démarrage du serveur RPC du portefeuille</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3866"/>
        <source>Failed to run wallet: </source>
        <translation>Échec du lancement du portefeuille&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3869"/>
        <source>Stopped wallet RPC server</source>
        <translation>Arrêt du serveur RPC du portefeuille</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3878"/>
        <source>Failed to save wallet: </source>
        <translation>Échec de la sauvegarde du portefeuille&#xa0;: </translation>
    </message>
</context>
<context>
    <name>wallet_args</name>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="168"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8967"/>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3930"/>
        <source>Wallet options</source>
        <translation>Options du portefeuille</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="73"/>
        <source>Generate wallet from JSON format file</source>
        <translation>Générer un portefeuille à partir d&apos;un fichier au format JSON</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="77"/>
        <source>Use wallet &lt;arg&gt;</source>
        <translation>Utiliser le portefeuille &lt;arg&gt;</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="105"/>
        <source>Max number of threads to use for a parallel job</source>
        <translation>Nombre maximum de threads à utiliser pour les travaux en parallèle</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="106"/>
        <source>Specify log file</source>
        <translation>Spécifier le fichier journal</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="107"/>
        <source>Config file</source>
        <translation>Fichier de configuration</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="119"/>
        <source>General options</source>
        <translation>Options générales</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="144"/>
        <source>This is the command line monero wallet. It needs to connect to a monero
daemon to work correctly.</source>
        <translation>Ceci est le portefeuille monero en ligne de commande. Il a besoin de se
connecter à un démon monero pour fonctionner correctement.</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="169"/>
        <source>Can&apos;t find config file </source>
        <translation>Impossible de trouver le fichier de configuration </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="210"/>
        <source>Logging to: </source>
        <translation>Journalisation dans&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="212"/>
        <source>Logging to %s</source>
        <translation>Journalisation dans %s</translation>
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
        <translation>Usage&#xa0;:</translation>
    </message>
</context>
</TS>
