module voting_system::dashboard;

use std::string::String;

// === Structs ===
public struct Proposal has key {
    // public on-chain object type (has a UID/key)
    id: UID, // unique object id for on-chain object instances
    title: String, // human-readable title of the proposal
    description: String, // detailed description text
    voted_yes_count: u64, // number of yes votes (unsigned 64-bit)
    voted_no_count: u64, // number of no votes (unsigned 64-bit)
    expiration: u64, // Unix timestamp when voting ends
    creator: address, // address of the account that created the proposal
    voter_registry: vector<address>, // list of addresses that have voted (prevents double-vote)
}

// === Public Functions ===
public fun create_proposal(
    // public function to create and publish a new Proposal object
    title: String, // title parameter passed in by caller
    description: String, // description parameter passed in by caller
    expiration: u64, // expiration timestamp parameter
    ctx: &mut TxContext, // mutable transaction context (used to create objects and get sender)
) {
    let proposal = Proposal {
        // construct a Proposal struct value
        id: object::new(ctx), // allocate a fresh UID for this object using the TxContext
        title: title, // set title field from parameter
        description: description, // set description field from parameter
        voted_yes_count: 0, // initialize yes count to zero
        voted_no_count: 0, // initialize no count to zero
        expiration: expiration, // set expiration field from parameter
        creator: ctx.sender(), // record the transaction sender as creator
        voter_registry: vector[], // initialize an empty vector for voter registry
    };

    transfer::share_object(proposal); // share the object (transfer into shared on-chain storage)
}
