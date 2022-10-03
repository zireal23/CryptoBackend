import { assert } from "console";
import  { Request, Response } from "express";
import cryptoPriceModel from "../models/cryptoPriceModel";

/**
 * This controller returns the last insert prices of all the coins in the database.
 * @param req
 * @param res
 * @returns response to the client with the last insert prices of all the coins in the database.
 * @example
 * GET /api/crypto/latestaggregateprices
**/
const fetchAggregatePrices = async (req: Request, res: Response) => { 
    if (!req) {
        res.status(400).send("Bad request");
    }
    console.log("fetching aggregate prices");
    try { 
        cryptoPriceModel.find().sort({ $natural: -1 }).limit(100).exec(function (err, result) {
            if (err) {
                res.status(403).send(err);
                return;
            }
            console.log("Now displaying the latest crypto data");
            assert(Array.isArray(result));
            res.status(200).send(result);
        })
    }
    catch (err) {
        res.status(500).send(err);
        return;
    }

}

const fetchAggregatePricesForCoin = async (req: Request, res: Response) => { 
    const { coinSymbol } = req.params;
    if (!coinSymbol) {
        res.status(400).send("Bad request");
    }
    console.log("fetching aggregate prices for coin");
    try { 
        // find the distinct coin names in the database sorted by time
        const result = await cryptoPriceModel.findOne({ ID: String(coinSymbol).toLowerCase() });
        if (!result) { 
            res.status(404).send("Coin not found");
        }
        console.log("found coin");
        console.log(result?.RealPrice);
        res.status(200).send(result);
    }
    catch (err) {
        res.status(500).send(err);
    }
}

export {fetchAggregatePrices, fetchAggregatePricesForCoin};