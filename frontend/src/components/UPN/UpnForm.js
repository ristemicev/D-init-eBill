import React, {Component} from 'react';
import './style.css'

export class Upn extends Component {
    render() {
        return (
            <div className="frame">
                <div className="potrdilo">
                    <div className="objekt">
                        <label className="upn">UPN QR - potrdilo</label>
                    </div>
                    <div className="fieldsPotrdilo">
                        <div className="objekt">
                            <label className="label">Ime plačnika</label>
                            <input className="ime"></input>
                        </div>
                        <div className="objekt">
                            <label className="label2">Namen in rok plačila</label>
                            <input className="namen"></input>
                        </div>
                        <div className="objekt">
                            <div className="objekt">
                                <label className="eur">EUR</label>
                            </div>
                            <label className="label3">Znesek</label>
                            <input className="znesek"></input>
                        </div>
                        <div className="objekt">
                            <label className="label2">IBAN in referenca prejemnika</label>
                            <input className="iban"></input>
                        </div>
                        <div className="objekt">
                            <label className="label2">Ime prejemnika</label>
                            <input className="iban"></input>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="placnik">
                        <div className="fieldsPlacnik">
                            <div className="redica">
                                <div className="objekt">
                                    <label className="label">Koda QR</label>
                                    <div className="qrCode"></div>
                                </div>
                                <div className="desno">
                                    <div className="redica">
                                        <label className="label">IBAN plačnika</label>
                                        <input className="ibanPlacnika"></input>
                                        <label className="labelPolog">Polog</label>
                                        <input className="polog"></input>
                                        <label className="labelDvig">Dvig</label>
                                        <input className="dvig"></input>
                                    </div>
                                    <div className="redica">
                                        <label className="label2">Referenca plačnika</label>
                                        <input className="referencaKod"></input>
                                        <input className="referenca"></input>
                                    </div>
                                    <div className="redica">
                                        <label className="label2">Ime, ulica in kraj plačnika</label>
                                        <input className="imeAdresa"></input>
                                    </div>
                                    <div className="redica">
                                        <label className="labelZnesek">Znesek</label>
                                        <div className="objekt">
                                            <label className="eur2">EUR</label>
                                        </div>
                                        <input className="znesek2"></input>
                                        <label className="labelDatum">Datum plačila</label>
                                        <input className="datumPlacila"></input>
                                        <label className="labelNujno">Nujno</label>
                                        <input className="nujno"></input>
                                    </div>
                                </div>
                            </div>
                            <div className="redica">
                                <label className="label2">Koda namena</label>
                                <input className="kodaNamena"></input>
                                <div className="objekt">
                                    <label className="labelObjekt">Namen plačila</label>
                                    <input className="namenPlacila"></input>
                                </div>
                                <div className="objekt">
                                    <label className="labelObjekt">Rok plačila</label>
                                    <input className="rokPlacila"></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="prejemnik">
                        <div className="fieldsPrejemnik">
                            <div className="redica">
                                <label className="label">IBAN prejemnika</label>
                                <input className="ibanPrejemnika"></input>
                                <div className="objekt">
                                    <label className="upnQR">UPN QR</label>
                                </div>
                            </div>
                            <div className="redica">
                                <div className="levo">
                                    <div className="redica">
                                        <label className="label2">Referenca prejemnika</label>
                                        <input className="referencaKod"></input>
                                        <input className="referenca"></input>
                                    </div>
                                    <div className="redica">
                                        <label className="label2">Ime, ulica in kraj prejemnika</label>
                                        <input className="imeAdresa"></input>
                                    </div>
                                </div>
                                <div className="podpis">
                                    <div className="linija">
                                        <label className="podpisLabel">Podpis plačnika (neobvezno žig)</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Upn;