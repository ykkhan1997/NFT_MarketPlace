// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity >0.8.9;
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "hardhat/console.sol";

contract NftMarketPlace is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenId;
    Counters.Counter private _itemsSold;

    address payable owner;

    constructor() ERC721("MetaverseToken", "MTT") {
        owner = payable(msg.sender);
    }

    modifier onlyOwner() {
        require(
            msg.sender == owner,
            "Only owner of marketplace can access this"
        );
        _;
    }
    struct MarketItems {
        uint256 tokenId;
        address payable seller;
        address payable owner;
        uint256 price;
        bool sold;
    }
    mapping(uint256 => MarketItems) private IdMarketItems;
    uint256 listingPrice = 0.0025 ether;

    function updateListingPrice(uint256 _listingPrice) public payable {
        listingPrice = _listingPrice;
    }

    function returnListingPrice() public view returns (uint256) {
        return listingPrice;
    }

    function createToken(
        string memory tokenURI,
        uint256 price
    ) public payable returns (uint256) {
        _tokenId.increment();
        uint256 newTokenId = _tokenId.current();
        _mint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, tokenURI);
        listingNFT(newTokenId, price);
        return newTokenId;
    }

    function listingNFT(uint256 tokenId, uint256 price) private {
        require(price > 0, "Price atleast 1 wei");
        require(
            msg.value == listingPrice,
            "You have not enought amount to list nft"
        );
        IdMarketItems[tokenId] = MarketItems(
            tokenId,
            payable(msg.sender),
            payable(address(this)),
            price,
            false
        );
        _transfer(msg.sender, address(this), tokenId);
    }

    function buyNFT(uint256 tokenId) public payable {
        uint256 price = IdMarketItems[tokenId].price;
        require(
            msg.value == price,
            "You have not enough amount to complete this transaction"
        );
        IdMarketItems[tokenId].owner = payable(msg.sender);
        IdMarketItems[tokenId].sold = true;
        IdMarketItems[tokenId].seller = payable(address(0));
        _itemsSold.increment();
        _transfer(address(this), msg.sender, tokenId);
        payable(owner).transfer(listingPrice);
        payable(IdMarketItems[tokenId].seller).transfer(msg.value);
    }

    function resellNFT(uint256 tokenId, uint256 price) public payable {
        require(
            IdMarketItems[tokenId].owner == msg.sender,
            "Only NFT owner can perform this action"
        );
        require(
            msg.value == listingPrice,
            "You have not enought amount to list nft"
        );
        IdMarketItems[tokenId].sold = false;
        IdMarketItems[tokenId].price = price;
        IdMarketItems[tokenId].seller = payable(msg.sender);
        IdMarketItems[tokenId].owner = payable(address(this));
        _itemsSold.decrement();
        _transfer(msg.sender, address(this), tokenId);
    }

    //fetch UnSold nFts
    function FetchUnsoldNfts() public view returns (MarketItems[] memory) {
        uint256 totalItemsCount = _tokenId.current();
        uint256 unSoldItems = _tokenId.current() - _itemsSold.current();
        uint256 currentIndex = 0;
        MarketItems[] memory items = new MarketItems[](unSoldItems);
        for (uint256 i = 0; i < totalItemsCount; i++) {
            if(IdMarketItems[i+1].owner==address(this)){
                uint256 currentId=i+1;
                MarketItems storage currentItems=IdMarketItems[currentId];
                items[currentIndex]=currentItems;
                currentIndex+=1;
            }
        }
        return items;
    }

    //Fetch Buyer nfts
    function FetchMyNfts() public view returns (MarketItems[] memory) {
        uint256 totalItemsCount = _tokenId.current();
        uint256 itemsCount = 0;
        uint256 currentIndex = 0;
        for (uint256 i = 0; i < totalItemsCount; i++) {
            if (IdMarketItems[i + 1].owner == msg.sender) {
                itemsCount += 1;
            }
        }
        MarketItems[] memory items = new MarketItems[](itemsCount);
        for (uint256 i = 0; i < totalItemsCount; i++) {
            if (IdMarketItems[i + 1].owner == msg.sender) {
                uint256 currentId = i+1;

                MarketItems storage currentItem = IdMarketItems[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }
    //Get Listed Nfts
    function listedNfts()public view returns(MarketItems[] memory){
        uint256 totalItemsCount=_tokenId.current();
        uint256 itemsCount=0;
        uint256 currentIndex=0;
        for(uint256 i=0;i<totalItemsCount;i++){
            if(IdMarketItems[i+1].seller==msg.sender){
                itemsCount+=1;
            }
        }
        MarketItems[] memory items=new MarketItems[](itemsCount);
        for(uint256 i=0;i<totalItemsCount;i++){
            if(IdMarketItems[i+1].seller==msg.sender){
                uint256 currentId=i+1;
                MarketItems storage currentItems=IdMarketItems[currentId];
                items[currentIndex]=currentItems;
                currentIndex+=1;
            }
        }
        return items;
    }
}
