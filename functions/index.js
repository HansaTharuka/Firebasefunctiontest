const functions = require('firebase-functions');

const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const omitEmpty = require('omit-empty');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(port, function () {

    console.log("Listening to Port " + port);
});

app.get('/nlb/results/:name/:date', (req, res) => {

    // res.send(req.params.name+""+req.params.date);
    const url = "https://www.nlb.lk/English/results/" + req.params.name + "/" + req.params.date;
    var data = [];
    var finaldata = [];
    axios.get(url).then(response => {
        results = [];
        const $ = cheerio.load(response.data);
        $('div.BB ol.B li.Circle').each((i, elem) => {
            results.push($(elem).text());
            //console.log(JSON.stringify(data));
        });

        data.push({ name: $('div.pc form.RFORM select option:selected').text() })
        data.push({ date: $('div.pc form.RFORM input.date').attr("value") })
        data.push({ draw_no: $('div.lresult h1 big').text() })
        data.push({ results: results.toString() });
        res.send(data);
        //console.log(JSON.stringify(data));

    })
        .catch(err => {
            console.log(err);
        })
});

app.get('/nlb/results/:date', (req, res) => {

    // res.send(req.params.name+""+req.params.date);
    const url1 = "https://www.nlb.lk/English/results/dhana-nidhanaya" + "/" + req.params.date;
    const url2 = "https://www.nlb.lk/English/results/mega-power" + "/" + req.params.date;
    const url3 = "https://www.nlb.lk/English/results/mahajana-sampatha" + "/" + req.params.date;
    const url4 = "https://www.nlb.lk/English/results/govisetha" + "/" + req.params.date;
    const url5 = "https://www.nlb.lk/English/results/jathika-sampatha" + "/" + req.params.date;
    const url6 = "https://www.nlb.lk/English/results/delakshapathi" + "/" + req.params.date;
    const url7 = "https://www.nlb.lk/English/results/neeroga" + "/" + req.params.date;
    const url8 = "https://www.nlb.lk/English/results/sampath-rekha" + "/" + req.params.date;
    const url9 = "https://www.nlb.lk/English/results/supiri-vasana" + "/" + req.params.date;
    const url10 = "https://www.nlb.lk/English/results/vasana-sampatha" + "/" + req.params.date;
    const url11 = "https://www.nlb.lk/English/results/sevana" + "/" + req.params.date;
    const url12 = "https://www.nlb.lk/English/results/dollar-fortune" + "/" + req.params.date;
    const url13 = "https://www.nlb.lk/English/results/super-fifty" + "/" + req.params.date;
    var data = [];
    var finaldata = [];
    axios.get(url1).then(response => {
        results = [];
        const $ = cheerio.load(response.data);
        $('div.BB ol.B li.Circle').each((i, elem) => {
            results.push($(elem).text());
        });

        prices = [];
        $('div.c ul.superprize li p').each((i, elem) => {
            prices.push($(elem).text());
        });

        data.push({
            name: $('div.pc form.RFORM select option:selected').text(), date: $('div.pc form.RFORM input.date').attr("value"),
            draw_no: $('div.lresult h1 big').text(), results: results.toString(), price: prices.toString()
        })

        axios.get(url2).then(response => {
            results = [];
            const $ = cheerio.load(response.data);
            $('div.BB ol.B li.Circle').each((i, elem) => {
                results.push($(elem).text());
            });

            prices = [];
            $('div.c ul.superprize li p').each((i, elem) => {
                prices.push($(elem).text());
            });

            data.push({
                name: $('div.pc form.RFORM select option:selected').text(), date: $('div.pc form.RFORM input.date').attr("value"),
                draw_no: $('div.lresult h1 big').text(), results: results.toString(), price: prices.toString()
            })

            axios.get(url3).then(response => {
                results = [];
                const $ = cheerio.load(response.data);
                $('div.BB ol.B li.Circle').each((i, elem) => {
                    results.push($(elem).text());
                });

                prices = [];
                $('div.c ul.superprize li p').each((i, elem) => {
                    prices.push($(elem).text());
                });

                data.push({
                    name: $('div.pc form.RFORM select option:selected').text(), date: $('div.pc form.RFORM input.date').attr("value"),
                    draw_no: $('div.lresult h1 big').text(), results: results.toString(), price: prices.toString()
                })

                axios.get(url3).then(response => {
                    results = [];
                    const $ = cheerio.load(response.data);
                    $('div.BB ol.B li.Circle').each((i, elem) => {
                        results.push($(elem).text());
                    });

                    prices = [];
                    $('div.c ul.superprize li p').each((i, elem) => {
                        prices.push($(elem).text());
                    });

                    data.push({
                        name: $('div.pc form.RFORM select option:selected').text(), date: $('div.pc form.RFORM input.date').attr("value"),
                        draw_no: $('div.lresult h1 big').text(), results: results.toString(), price: prices.toString()
                    })

                    axios.get(url4).then(response => {
                        results = [];
                        const $ = cheerio.load(response.data);
                        $('div.BB ol.B li.Circle').each((i, elem) => {
                            results.push($(elem).text());
                        });

                        prices = [];
                        $('div.c ul.superprize li p').each((i, elem) => {
                            prices.push($(elem).text());
                        });

                        data.push({
                            name: $('div.pc form.RFORM select option:selected').text(), date: $('div.pc form.RFORM input.date').attr("value"),
                            draw_no: $('div.lresult h1 big').text(), results: results.toString(), price: prices.toString()
                        })

                        axios.get(url5).then(response => {
                            results = [];
                            const $ = cheerio.load(response.data);
                            $('div.BB ol.B li.Circle').each((i, elem) => {
                                results.push($(elem).text());
                            });

                            prices = [];
                            $('div.c ul.superprize li p').each((i, elem) => {
                                prices.push($(elem).text());
                            });

                            data.push({
                                name: $('div.pc form.RFORM select option:selected').text(), date: $('div.pc form.RFORM input.date').attr("value"),
                                draw_no: $('div.lresult h1 big').text(), results: results.toString(), price: prices.toString()
                            })

                            axios.get(url6).then(response => {
                                results = [];
                                const $ = cheerio.load(response.data);
                                $('div.BB ol.B li.Circle').each((i, elem) => {
                                    results.push($(elem).text());
                                });

                                prices = [];
                                $('div.c ul.superprize li p').each((i, elem) => {
                                    prices.push($(elem).text());
                                });

                                data.push({
                                    name: $('div.pc form.RFORM select option:selected').text(), date: $('div.pc form.RFORM input.date').attr("value"),
                                    draw_no: $('div.lresult h1 big').text(), results: results.toString(), price: prices.toString()
                                })

                                axios.get(url7).then(response => {
                                    results = [];
                                    const $ = cheerio.load(response.data);
                                    $('div.BB ol.B li.Circle').each((i, elem) => {
                                        results.push($(elem).text());
                                    });

                                    prices = [];
                                    $('div.c ul.superprize li p').each((i, elem) => {
                                        prices.push($(elem).text());
                                    });

                                    data.push({
                                        name: $('div.pc form.RFORM select option:selected').text(), date: $('div.pc form.RFORM input.date').attr("value"),
                                        draw_no: $('div.lresult h1 big').text(), results: results.toString(), price: prices.toString()
                                    })

                                    axios.get(url8).then(response => {
                                        results = [];
                                        const $ = cheerio.load(response.data);
                                        $('div.BB ol.B li.Circle').each((i, elem) => {
                                            results.push($(elem).text());
                                        });

                                        prices = [];
                                        $('div.c ul.superprize li p').each((i, elem) => {
                                            prices.push($(elem).text());
                                        });

                                        data.push({
                                            name: $('div.pc form.RFORM select option:selected').text(), date: $('div.pc form.RFORM input.date').attr("value"),
                                            draw_no: $('div.lresult h1 big').text(), results: results.toString(), price: prices.toString()
                                        })

                                        axios.get(url9).then(response => {
                                            results = [];
                                            const $ = cheerio.load(response.data);
                                            $('div.BB ol.B li.Circle').each((i, elem) => {
                                                results.push($(elem).text());
                                            });

                                            prices = [];
                                            $('div.c ul.superprize li p').each((i, elem) => {
                                                prices.push($(elem).text());
                                            });

                                            data.push({
                                                name: $('div.pc form.RFORM select option:selected').text(), date: $('div.pc form.RFORM input.date').attr("value"),
                                                draw_no: $('div.lresult h1 big').text(), results: results.toString(), price: prices.toString()
                                            })

                                            axios.get(url10).then(response => {
                                                results = [];
                                                const $ = cheerio.load(response.data);
                                                $('div.BB ol.B li.Circle').each((i, elem) => {
                                                    results.push($(elem).text());
                                                });

                                                prices = [];
                                                $('div.c ul.superprize li p').each((i, elem) => {
                                                    prices.push($(elem).text());
                                                });

                                                data.push({
                                                    name: $('div.pc form.RFORM select option:selected').text(), date: $('div.pc form.RFORM input.date').attr("value"),
                                                    draw_no: $('div.lresult h1 big').text(), results: results.toString(), price: prices.toString()
                                                })

                                                axios.get(url11).then(response => {
                                                    results = [];
                                                    const $ = cheerio.load(response.data);
                                                    $('div.BB ol.B li.Circle').each((i, elem) => {
                                                        results.push($(elem).text());
                                                    });

                                                    prices = [];
                                                    $('div.c ul.superprize li p').each((i, elem) => {
                                                        prices.push($(elem).text());
                                                    });

                                                    data.push({
                                                        name: $('div.pc form.RFORM select option:selected').text(), date: $('div.pc form.RFORM input.date').attr("value"),
                                                        draw_no: $('div.lresult h1 big').text(), results: results.toString(), price: prices.toString()
                                                    })

                                                    axios.get(url12).then(response => {
                                                        results = [];
                                                        const $ = cheerio.load(response.data);
                                                        $('div.BB ol.B li.Circle').each((i, elem) => {
                                                            results.push($(elem).text());
                                                        });

                                                        prices = [];
                                                        $('div.c ul.superprize li p').each((i, elem) => {
                                                            prices.push($(elem).text());
                                                        });

                                                        data.push({
                                                            name: $('div.pc form.RFORM select option:selected').text(), date: $('div.pc form.RFORM input.date').attr("value"),
                                                            draw_no: $('div.lresult h1 big').text(), results: results.toString(), price: prices.toString()
                                                        })

                                                        axios.get(url3).then(response => {
                                                            results = [];
                                                            const $ = cheerio.load(response.data);
                                                            $('div.BB ol.B li.Circle').each((i, elem) => {
                                                                results.push($(elem).text());
                                                            });

                                                            prices = [];
                                                            $('div.c ul.superprize li p').each((i, elem) => {
                                                                prices.push($(elem).text());
                                                            });

                                                            data.push({
                                                                name: $('div.pc form.RFORM select option:selected').text(), date: $('div.pc form.RFORM input.date').attr("value"),
                                                                draw_no: $('div.lresult h1 big').text(), results: results.toString(), price: prices.toString()
                                                            })



                                                            var myStringArray = data;
                                                            var arrayLength = myStringArray.length;
                                                            for (var i = 0; i < arrayLength; i++) {
                                                                //console.log(myStringArray[i]);
                                                                if (myStringArray[i].draw_no !== '' && myStringArray[i].results !== '') {
                                                                    finaldata[i] = myStringArray[i];
                                                                }
                                                                //Do something
                                                            }
                                                            //console.log(JSON.stringify(finaldata));

                                                            var array = finaldata;

                                                            var filtered = array.filter(function (el) {
                                                                return el != null;
                                                            });


                                                            function removeDuplicates(originalArray, prop) {
                                                                var newArray = [];
                                                                var lookupObject = {};

                                                                for (var i in originalArray) {
                                                                    lookupObject[originalArray[i][prop]] = originalArray[i];
                                                                }

                                                                for (i in lookupObject) {
                                                                    newArray.push(lookupObject[i]);
                                                                }
                                                                return newArray;
                                                            }

                                                            var uniqueArray = removeDuplicates(filtered, "draw_no");
                                                            //console.log("uniqueArray is: " + JSON.stringify(uniqueArray));


                                                            //console.log(JSON.stringify(filtered));
                                                            res.send(uniqueArray);
                                                            //console.log(JSON.stringify(finaldata.filter(n => n)));
                                                            //console.log(omitEmpty(data));


                                                        })
                                                            .catch(err => {
                                                                console.log(err);
                                                            })

                                                    })
                                                        .catch(err => {
                                                            console.log(err);
                                                        })

                                                })
                                                    .catch(err => {
                                                        console.log(err);
                                                    });

                                            })
                                                .catch(err => {
                                                    console.log(err);
                                                })

                                        })
                                            .catch(err => {
                                                console.log(err);
                                            })

                                    })
                                        .catch(err => {
                                            console.log(err);
                                        })

                                })
                                    .catch(err => {
                                        console.log(err);
                                    })

                            })
                                .catch(err => {
                                    console.log(err);
                                })

                        })
                            .catch(err => {
                                console.log(err);
                            })

                    })
                        .catch(err => {
                            console.log(err);
                        })

                })
                    .catch(err => {
                        console.log(err);
                    })

            })
                .catch(err => {
                    console.log(err);
                })

        })
            .catch(err => {
                console.log(err);
            })

        //console.log(JSON.stringify(data));

    })
        .catch(err => {
            console.log(err);
        })


});

exports.app = functions.https.onRequest(app);