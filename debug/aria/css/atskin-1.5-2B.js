/*
 * Aria Templates
 * Copyright Amadeus s.a.s.
 */
Aria.classDefinition({
    "$classpath": "aria.widgets.AriaSkin",
    "$singleton": true,
    "$prototype": {
        "skinName": "atskin",
        "skinObject": {
            "SortIndicator": {
                "std": {
                    "iconset": "sortIndicator",
                    "iconprefix": "si_"
                },
                "aria:skinNormalized": true
            },
            "Fieldset": {
                "std": {
                    "frame": {
                        "frameType": "Table"
                    },
                    "states": {
                        "normal": {
                            "label": {
                                "backgroundColor": "#FFFFF7",
                                "left": 10,
                                "paddingLeft": 5,
                                "top": 2,
                                "paddingRight": 5,
                                "paddingTop": 0,
                                "paddingBottom": 0,
                                "fontWeight": "bold",
                                "color": "black"
                            },
                            "frame": {
                                "sprWidth": 13,
                                "sprHeight": 16,
                                "sprIdx": 0,
                                "sprSpacing": 2,
                                "spcLeft": 6,
                                "spcTop": 12,
                                "spriteURL": "atskin/sprites/fieldset.gif",
                                "spriteURLv": "atskin/sprites/fieldset_v.gif",
                                "spriteURLh": "atskin/sprites/fieldset_h.gif",
                                "marginTop": 10,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "color": "#000",
                                "backgroundColor": "#FFFFF7",
                                "frameIcon": "",
                                "frameIconHPos": "left",
                                "frameIconVPos": "bottom"
                            }
                        }
                    }
                },
                "aria:skinNormalized": true
            },
            "MultiSelect": {
                "std": {
                    "iconsRight": "dropdown",
                    "frame": {
                        "frameType": "FixedHeight"
                    },
                    "states": {
                        "normal": {
                            "icons": {
                                "dropdown": "dropdown:multiselect_normal"
                            },
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": true,
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 0,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "prefill": {
                            "icons": {
                                "dropdown": "dropdown:multiselect_normal"
                            },
                            "label": {},
                            "frame": {
                                "color": "gray",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": true,
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 0,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "normalFocused": {
                            "icons": {
                                "dropdown": "dropdown:multiselect_focused"
                            },
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": true,
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 2,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "normalError": {
                            "icons": {
                                "dropdown": "dropdown:multiselect_error"
                            },
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": true,
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 4,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "mandatoryFocused": {
                            "icons": {
                                "dropdown": "dropdown:multiselect_focused"
                            },
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": true,
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 3,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "mandatoryError": {
                            "icons": {
                                "dropdown": "dropdown:multiselect_error"
                            },
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": true,
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 5,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "readOnly": {
                            "icons": {
                                "dropdown": "dropdown:multiselect_normal"
                            },
                            "label": {},
                            "frame": {
                                "color": "#AB9B85",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": true,
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 7,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "mandatoryErrorFocused": {
                            "icons": {
                                "dropdown": "dropdown:multiselect_error"
                            },
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": true,
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 5,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "normalErrorFocused": {
                            "icons": {
                                "dropdown": "dropdown::multiselect_error"
                            },
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": true,
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 4,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "mandatory": {
                            "icons": {
                                "dropdown": "dropdown:multiselect_normal"
                            },
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": true,
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 1,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "disabled": {
                            "label": {
                                "color": "#E6D9C6"
                            },
                            "icons": {
                                "dropdown": "dropdown:multiselect_normal"
                            },
                            "frame": {
                                "color": "#E6D9C6",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": true,
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 6,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        }
                    },
                    "helpText": {
                        "italics": true,
                        "color": "gray"
                    },
                    "offsetTop": 1,
                    "iconsLeft": "",
                    "listSclass": "dropdown",
                    "simpleHTML": false,
                    "label": {
                        "fontWeight": "normal"
                    },
                    "innerPaddingTop": 0,
                    "innerPaddingRight": 0,
                    "innerPaddingBottom": 0,
                    "innerPaddingLeft": 0
                },
                "aria:skinNormalized": true
            },
            "Gauge": {
                "std": {
                    "labelMargins": "3px 0 0 0",
                    "sprHeight": 17,
                    "spriteUrl": "atskin/sprites/back.gif",
                    "border": "1px solid #C2D1F0",
                    "labelFontSize": 12,
                    "borderPadding": 1,
                    "backgroundColor": "transparent",
                    "borderTopLeftRadius": 0,
                    "borderTopRightRadius": 0,
                    "borderBottomLeftRadius": 0,
                    "borderBottomRightRadius": 0,
                    "container": {
                        "backgroundColor": "transparent",
                        "borderTopLeftRadius": 0,
                        "borderTopRightRadius": 0,
                        "borderBottomLeftRadius": 0,
                        "borderBottomRightRadius": 0,
                        "boxShadow": ""
                    }
                },
                "aria:skinNormalized": true
            },
            "Splitter": {
                "std": {
                    "borderColor": "#AB9B85",
                    "borderWidth": 1,
                    "proxySpriteURLh": "atskin/sprites/splitter.gif",
                    "proxyBackgroundColor": "#BBBBBB",
                    "handleBackgroundColor": "#FFFBF1",
                    "handleSpriteURLh": "atskin/sprites/splitter.gif",
                    "separatorHeight": 6,
                    "separatorWidth": 6,
                    "handleSpriteURLv": "atskin/sprites/splitter_v.gif",
                    "proxySpriteURLv": "atskin/sprites/splitter_v.gif",
                    "borderTopLeftRadius": 0,
                    "borderTopRightRadius": 0,
                    "borderBottomLeftRadius": 0,
                    "borderBottomRightRadius": 0,
                    "backgroundColor": "transparent"
                },
                "aria:skinNormalized": true
            },
            "DatePicker": {
                "simple": {
                    "innerPaddingTop": 1,
                    "iconsRight": "dropdown",
                    "innerPaddingRight": 0,
                    "states": {
                        "mandatoryErrorFocused": {
                            "icons": {
                                "dropdown": "dropdown:datepicker_normal"
                            },
                            "color": "#000000",
                            "label": {},
                            "frame": {}
                        },
                        "normalErrorFocused": {
                            "icons": {
                                "dropdown": "dropdown:datepicker_normal"
                            },
                            "color": "#000000",
                            "label": {},
                            "frame": {}
                        },
                        "normal": {
                            "icons": {
                                "dropdown": "dropdown:datepicker_normal"
                            },
                            "color": "#000000",
                            "label": {},
                            "frame": {}
                        },
                        "mandatoryError": {
                            "icons": {
                                "dropdown": "dropdown:datepicker_normal"
                            },
                            "color": "#000000",
                            "label": {},
                            "frame": {}
                        },
                        "normalFocused": {
                            "icons": {
                                "dropdown": "dropdown:datepicker_normal"
                            },
                            "color": "#000000",
                            "label": {},
                            "frame": {}
                        },
                        "normalError": {
                            "icons": {
                                "dropdown": "dropdown:datepicker_normal"
                            },
                            "color": "#000000",
                            "label": {},
                            "frame": {}
                        },
                        "mandatory": {
                            "color": "#000000",
                            "icons": {
                                "dropdown": "dropdown:datepicker_normal"
                            },
                            "label": {},
                            "frame": {}
                        },
                        "mandatoryFocused": {
                            "color": "#000000",
                            "icons": {
                                "dropdown": "dropdown:datepicker_focused"
                            },
                            "label": {},
                            "frame": {}
                        },
                        "disabled": {
                            "color": "#E6D9C6",
                            "icons": {
                                "dropdown": "dropdown:datepicker_normal"
                            },
                            "label": {
                                "color": "#E6D9C6"
                            },
                            "frame": {}
                        },
                        "readOnly": {
                            "color": "#AB9B85",
                            "icons": {
                                "dropdown": "dropdown:datepicker_normal"
                            },
                            "label": {},
                            "frame": {}
                        },
                        "prefill": {
                            "color": "gray",
                            "icons": {
                                "dropdown": "dropdown:datepicker_normal"
                            },
                            "label": {},
                            "frame": {}
                        }
                    },
                    "offsetTop": 1,
                    "innerPaddingLeft": 0,
                    "innerPaddingBottom": 2,
                    "simpleHTML": true,
                    "iconsLeft": "",
                    "calendar": {
                        "showWeekNumbers": true,
                        "restrainedNavigation": true,
                        "showShortcuts": true,
                        "numberOfUnits": 3,
                        "sclass": "dropdown"
                    },
                    "label": {
                        "fontWeight": "normal"
                    },
                    "helpText": {
                        "color": "gray",
                        "italics": true
                    },
                    "frame": {
                        "frameType": "SimpleHTML"
                    }
                },
                "std": {
                    "iconsRight": "dropdown",
                    "frame": {
                        "frameType": "FixedHeight"
                    },
                    "states": {
                        "readOnly": {
                            "icons": {
                                "dropdown": "dropdown:datepicker_normal"
                            },
                            "label": {},
                            "frame": {
                                "color": "#AB9B85",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": true,
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 7,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "mandatoryErrorFocused": {
                            "icons": {
                                "dropdown": "dropdown:datepicker_error"
                            },
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": true,
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 5,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "normalErrorFocused": {
                            "icons": {
                                "dropdown": "dropdown:datepicker_error"
                            },
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": true,
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 4,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "mandatory": {
                            "icons": {
                                "dropdown": "dropdown:datepicker_normal"
                            },
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": true,
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 1,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "normal": {
                            "icons": {
                                "dropdown": "dropdown:datepicker_normal"
                            },
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": true,
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 0,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "mandatoryFocused": {
                            "icons": {
                                "dropdown": "dropdown:datepicker_focused"
                            },
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": true,
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 3,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "prefill": {
                            "icons": {
                                "dropdown": "dropdown:datepicker_normal"
                            },
                            "label": {},
                            "frame": {
                                "color": "gray",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": true,
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 0,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "mandatoryError": {
                            "icons": {
                                "dropdown": "dropdown:datepicker_error"
                            },
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": true,
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 5,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "normalFocused": {
                            "icons": {
                                "dropdown": "dropdown:datepicker_focused"
                            },
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": true,
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 2,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "disabled": {
                            "label": {
                                "color": "#E6D9C6"
                            },
                            "icons": {
                                "dropdown": "dropdown:datepicker_normal"
                            },
                            "frame": {
                                "color": "#E6D9C6",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": true,
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 6,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "normalError": {
                            "icons": {
                                "dropdown": "dropdown:datepicker_error"
                            },
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": true,
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 4,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        }
                    },
                    "helpText": {
                        "italics": true,
                        "color": "gray"
                    },
                    "offsetTop": 1,
                    "iconsLeft": "",
                    "calendar": {
                        "showWeekNumbers": true,
                        "restrainedNavigation": true,
                        "showShortcuts": true,
                        "numberOfUnits": 3,
                        "sclass": "dropdown"
                    },
                    "simpleHTML": false,
                    "label": {
                        "fontWeight": "normal"
                    },
                    "innerPaddingTop": 0,
                    "innerPaddingRight": 0,
                    "innerPaddingBottom": 0,
                    "innerPaddingLeft": 0
                },
                "aria:skinNormalized": true
            },
            "RadioButton": {
                "simple": {
                    "simpleHTML": true,
                    "iconset": "checkBoxes",
                    "iconprefix": "rb_",
                    "states": {
                        "normalSelected": {
                            "color": "#000000"
                        },
                        "focused": {
                            "color": "#000000"
                        },
                        "focusedSelected": {
                            "color": "#000000"
                        },
                        "disabled": {
                            "color": "#B0B0B0"
                        },
                        "disabledSelected": {
                            "color": "#B0B0B0"
                        },
                        "readonly": {
                            "color": "#B0B0B0"
                        },
                        "readonlySelected": {
                            "color": "#B0B0B0"
                        },
                        "normal": {
                            "color": "#000000"
                        }
                    }
                },
                "std": {
                    "iconset": "checkBoxes",
                    "iconprefix": "rb_",
                    "states": {
                        "disabledSelected": {
                            "color": "#B0B0B0"
                        },
                        "normal": {
                            "color": "#000000"
                        },
                        "focusedSelected": {
                            "color": "#000000"
                        },
                        "focused": {
                            "color": "#000000"
                        },
                        "normalSelected": {
                            "color": "#000000"
                        },
                        "readonlySelected": {
                            "color": "#B0B0B0"
                        },
                        "readonly": {
                            "color": "#B0B0B0"
                        },
                        "disabled": {
                            "color": "#B0B0B0"
                        }
                    },
                    "simpleHTML": false
                },
                "aria:skinNormalized": true
            },
            "Textarea": {
                "std": {
                    "frame": {
                        "frameType": "Table"
                    },
                    "states": {
                        "readOnly": {
                            "label": {},
                            "frame": {
                                "sprWidth": 8,
                                "sprHeight": 12,
                                "sprIdx": 2,
                                "sprSpacing": 2,
                                "spcLeft": 4,
                                "spcTop": 6,
                                "spriteURL": "atskin/sprites/textarea.gif",
                                "spriteURLv": "atskin/sprites/textarea_v.gif",
                                "spriteURLh": "atskin/sprites/textarea_h.gif",
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "color": "#000",
                                "backgroundColor": "#FFFFFF",
                                "frameIcon": "",
                                "frameIconHPos": "left",
                                "frameIconVPos": "bottom"
                            }
                        },
                        "mandatoryErrorFocused": {
                            "label": {},
                            "frame": {
                                "sprWidth": 8,
                                "sprHeight": 12,
                                "sprIdx": 5,
                                "sprSpacing": 2,
                                "spcLeft": 4,
                                "spcTop": 6,
                                "spriteURL": "atskin/sprites/textarea.gif",
                                "spriteURLv": "atskin/sprites/textarea_v.gif",
                                "spriteURLh": "atskin/sprites/textarea_h.gif",
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "color": "#000",
                                "backgroundColor": "#FFE6AB",
                                "frameIcon": "",
                                "frameIconHPos": "left",
                                "frameIconVPos": "bottom"
                            }
                        },
                        "normalErrorFocused": {
                            "label": {},
                            "frame": {
                                "sprWidth": 8,
                                "sprHeight": 12,
                                "sprIdx": 6,
                                "sprSpacing": 2,
                                "spcLeft": 4,
                                "spcTop": 6,
                                "spriteURL": "atskin/sprites/textarea.gif",
                                "spriteURLv": "atskin/sprites/textarea_v.gif",
                                "spriteURLh": "atskin/sprites/textarea_h.gif",
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "color": "#000",
                                "backgroundColor": "#FFFFFF",
                                "frameIcon": "",
                                "frameIconHPos": "left",
                                "frameIconVPos": "bottom"
                            }
                        },
                        "normal": {
                            "label": {},
                            "frame": {
                                "sprWidth": 8,
                                "sprHeight": 12,
                                "sprIdx": 0,
                                "sprSpacing": 2,
                                "spcLeft": 4,
                                "spcTop": 6,
                                "spriteURL": "atskin/sprites/textarea.gif",
                                "spriteURLv": "atskin/sprites/textarea_v.gif",
                                "spriteURLh": "atskin/sprites/textarea_h.gif",
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "color": "#000",
                                "backgroundColor": "#FFFFFF",
                                "frameIcon": "",
                                "frameIconHPos": "left",
                                "frameIconVPos": "bottom"
                            }
                        },
                        "mandatory": {
                            "label": {},
                            "frame": {
                                "sprWidth": 8,
                                "sprHeight": 12,
                                "sprIdx": 3,
                                "sprSpacing": 2,
                                "spcLeft": 4,
                                "spcTop": 6,
                                "spriteURL": "atskin/sprites/textarea.gif",
                                "spriteURLv": "atskin/sprites/textarea_v.gif",
                                "spriteURLh": "atskin/sprites/textarea_h.gif",
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "color": "#000",
                                "backgroundColor": "#FFE6AB",
                                "frameIcon": "",
                                "frameIconHPos": "left",
                                "frameIconVPos": "bottom"
                            }
                        },
                        "mandatoryFocused": {
                            "label": {},
                            "frame": {
                                "sprWidth": 8,
                                "sprHeight": 12,
                                "sprIdx": 4,
                                "sprSpacing": 2,
                                "spcLeft": 4,
                                "spcTop": 6,
                                "spriteURL": "atskin/sprites/textarea.gif",
                                "spriteURLv": "atskin/sprites/textarea_v.gif",
                                "spriteURLh": "atskin/sprites/textarea_h.gif",
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "color": "#000",
                                "backgroundColor": "#FFE6AB",
                                "frameIcon": "",
                                "frameIconHPos": "left",
                                "frameIconVPos": "bottom"
                            }
                        },
                        "mandatoryError": {
                            "label": {},
                            "frame": {
                                "sprWidth": 8,
                                "sprHeight": 12,
                                "sprIdx": 5,
                                "sprSpacing": 2,
                                "spcLeft": 4,
                                "spcTop": 6,
                                "spriteURL": "atskin/sprites/textarea.gif",
                                "spriteURLv": "atskin/sprites/textarea_v.gif",
                                "spriteURLh": "atskin/sprites/textarea_h.gif",
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "color": "#000",
                                "backgroundColor": "#FFE6AB",
                                "frameIcon": "",
                                "frameIconHPos": "left",
                                "frameIconVPos": "bottom"
                            }
                        },
                        "normalFocused": {
                            "label": {},
                            "frame": {
                                "sprWidth": 8,
                                "sprHeight": 12,
                                "sprIdx": 1,
                                "sprSpacing": 2,
                                "spcLeft": 4,
                                "spcTop": 6,
                                "spriteURL": "atskin/sprites/textarea.gif",
                                "spriteURLv": "atskin/sprites/textarea_v.gif",
                                "spriteURLh": "atskin/sprites/textarea_h.gif",
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "color": "#000",
                                "backgroundColor": "#FFFFFF",
                                "frameIcon": "",
                                "frameIconHPos": "left",
                                "frameIconVPos": "bottom"
                            }
                        },
                        "normalError": {
                            "label": {},
                            "frame": {
                                "sprWidth": 8,
                                "sprHeight": 12,
                                "sprIdx": 6,
                                "sprSpacing": 2,
                                "spcLeft": 4,
                                "spcTop": 6,
                                "spriteURL": "atskin/sprites/textarea.gif",
                                "spriteURLv": "atskin/sprites/textarea_v.gif",
                                "spriteURLh": "atskin/sprites/textarea_h.gif",
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "color": "#000",
                                "backgroundColor": "#FFFFFF",
                                "frameIcon": "",
                                "frameIconHPos": "left",
                                "frameIconVPos": "bottom"
                            }
                        },
                        "disabled": {
                            "label": {
                                "color": "#E6D9C6"
                            },
                            "frame": {
                                "sprWidth": 8,
                                "sprHeight": 12,
                                "sprIdx": 2,
                                "sprSpacing": 2,
                                "spcLeft": 4,
                                "spcTop": 6,
                                "spriteURL": "atskin/sprites/textarea.gif",
                                "spriteURLv": "atskin/sprites/textarea_v.gif",
                                "spriteURLh": "atskin/sprites/textarea_h.gif",
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "color": "#E6D9C6",
                                "backgroundColor": "#FFFFFF",
                                "frameIcon": "",
                                "frameIconHPos": "left",
                                "frameIconVPos": "bottom"
                            }
                        },
                        "prefill": {
                            "label": {},
                            "frame": {
                                "sprWidth": 8,
                                "sprHeight": 12,
                                "sprIdx": 0,
                                "sprSpacing": 2,
                                "spcLeft": 4,
                                "spcTop": 6,
                                "spriteURL": "atskin/sprites/textarea.gif",
                                "spriteURLv": "atskin/sprites/textarea_v.gif",
                                "spriteURLh": "atskin/sprites/textarea_h.gif",
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "color": "#000",
                                "backgroundColor": "#FFFFFF",
                                "frameIcon": "",
                                "frameIconHPos": "left",
                                "frameIconVPos": "bottom"
                            }
                        }
                    },
                    "helpText": {
                        "italics": true,
                        "color": "gray"
                    },
                    "simpleHTML": false,
                    "label": {
                        "fontWeight": "normal"
                    },
                    "innerPaddingTop": 0,
                    "innerPaddingRight": 0,
                    "innerPaddingBottom": 0,
                    "innerPaddingLeft": 0
                },
                "aria:skinNormalized": true
            },
            "TabPanel": {
                "std": {
                    "frame": {
                        "frameType": "Table"
                    },
                    "states": {
                        "normal": {
                            "frame": {
                                "sprWidth": 66,
                                "sprHeight": 16,
                                "sprIdx": 0,
                                "sprSpacing": 2,
                                "spcLeft": 36,
                                "spcTop": 16,
                                "marginTop": -6,
                                "marginLeft": -25,
                                "marginRight": -14,
                                "marginBottom": -6,
                                "color": "#333333",
                                "backgroundColor": "#FFFFFF",
                                "frameIcon": "",
                                "frameIconHPos": "left",
                                "frameIconVPos": "bottom"
                            }
                        }
                    }
                },
                "aria:skinNormalized": true
            },
            "Dialog": {
                "std": {
                    "titleBarLeft": 0,
                    "titleBarTop": 0,
                    "closeIcon": "std:close",
                    "maximizeIcon": "std:maximize",
                    "titleBarHeight": 32,
                    "titleColor": "#615E55",
                    "divsclass": "dlg",
                    "titleBarRight": 10,
                    "shadowLeft": 0,
                    "shadowTop": 0,
                    "shadowRight": 14,
                    "shadowBottom": 8
                },
                "aria:skinNormalized": true
            },
            "Calendar": {
                "std": {
                    "dayFontWeight": "normal",
                    "previousPageIcon": "std:left_arrow",
                    "dayColor": "black",
                    "monthTitleBackgroundColor": "transparent",
                    "monthTitleColor": "black",
                    "weekDaysLabelBorderColor": "white",
                    "weekDaysLabelFontWeight": "bold",
                    "dayPadding": "0px",
                    "dayBackgroundColor": "transparent",
                    "weekDaysLabelBackgroundColor": "white",
                    "nextPageIcon": "std:right_arrow",
                    "monthTitleBorderColor": "#E6D9C6",
                    "monthTitlePaddingBottom": "0px",
                    "todayColor": "black",
                    "weekDaysLabelColor": "black",
                    "selectedColor": "black",
                    "weekEndColor": "black",
                    "weekEndBorderColor": "#F2ECDE",
                    "unselectableColor": "#AB9B85",
                    "weekEndBackgroundColor": "#F2ECDE",
                    "generalBackgroundColor": "white",
                    "todayBackgroundColor": "transparent",
                    "dayBorderColor": "white",
                    "selectedBackgroundColor": "#FFCC66",
                    "weekDaysLabelPadding": "0px",
                    "unselectableBackgroundColor": "transparent",
                    "divsclass": "list",
                    "monthTitlePaddingTop": "0px",
                    "defaultTemplate": "aria.widgets.calendar.CalendarTemplate",
                    "weekNumberBackgroundColor": "#E7DBC6",
                    "unselectableBorderColor": "white",
                    "todayBorderColor": "black",
                    "selectedBorderColor": "black",
                    "weekNumberBorderColor": "#E7DBC6",
                    "fontSize": 10
                },
                "dropdown": {
                    "divsclass": "dropdown",
                    "generalBackgroundColor": "white",
                    "monthTitleBorderColor": "#E6D9C6",
                    "monthTitleColor": "black",
                    "monthTitleBackgroundColor": "transparent",
                    "monthTitlePaddingTop": "0px",
                    "monthTitlePaddingBottom": "0px",
                    "dayBorderColor": "white",
                    "dayBackgroundColor": "transparent",
                    "dayColor": "black",
                    "dayPadding": "0px",
                    "dayFontWeight": "normal",
                    "weekEndBackgroundColor": "#F2ECDE",
                    "weekEndBorderColor": "#F2ECDE",
                    "weekEndColor": "black",
                    "unselectableBorderColor": "white",
                    "unselectableBackgroundColor": "transparent",
                    "unselectableColor": "#AB9B85",
                    "todayBorderColor": "black",
                    "todayBackgroundColor": "transparent",
                    "todayColor": "black",
                    "weekNumberBackgroundColor": "#E7DBC6",
                    "weekNumberBorderColor": "#E7DBC6",
                    "weekDaysLabelBackgroundColor": "white",
                    "weekDaysLabelBorderColor": "white",
                    "weekDaysLabelFontWeight": "bold",
                    "weekDaysLabelColor": "black",
                    "weekDaysLabelPadding": "0px",
                    "selectedBackgroundColor": "#FFCC66",
                    "selectedBorderColor": "black",
                    "selectedColor": "black",
                    "defaultTemplate": "aria.widgets.calendar.CalendarTemplate",
                    "fontSize": 10,
                    "previousPageIcon": "std:left_arrow",
                    "nextPageIcon": "std:right_arrow"
                },
                "aria:skinNormalized": true
            },
            "general": {
                "imagesRoot": "aria/css/",
                "overlay": {
                    "backgroundColor": "#ddd",
                    "opacity": 40,
                    "border": "1px solid black",
                    "borderTopLeftRadius": 0,
                    "borderTopRightRadius": 0,
                    "borderBottomLeftRadius": 0,
                    "borderBottomRightRadius": 0
                },
                "colors": {
                    "disabled": "#AB9B85"
                },
                "loadingOverlay": {
                    "backgroundColor": "#fff",
                    "opacity": 80,
                    "spriteURL": "atskin/imgs/loading.gif"
                },
                "dialogMask": {
                    "backgroundColor": "black",
                    "opacity": 40
                },
                "disable": {
                    "ul": {
                        "list": {}
                    }
                },
                "font": {},
                "anchor": {
                    "states": {
                        "normal": {
                            "text": {}
                        },
                        "link": {
                            "text": {}
                        },
                        "visited": {
                            "text": {}
                        },
                        "hover": {
                            "text": {}
                        },
                        "focus": {
                            "text": {}
                        }
                    }
                },
                "aria:skinNormalized": true
            },
            "Select": {
                "simple": {
                    "simpleHTML": true,
                    "iconsLeft": "",
                    "iconsRight": "dropdown",
                    "offsetTop": 1,
                    "listSclass": "dropdown",
                    "frame": {
                        "frameType": "SimpleHTML"
                    },
                    "states": {
                        "normalFocused": {
                            "icons": {
                                "dropdown": "dropdown:selectbox_focused"
                            },
                            "label": {},
                            "frame": {}
                        },
                        "mandatory": {
                            "icons": {
                                "dropdown": "dropdown:selectbox_normal"
                            },
                            "label": {},
                            "frame": {}
                        },
                        "mandatoryFocused": {
                            "icons": {
                                "dropdown": "dropdown:selectbox_focused"
                            },
                            "label": {},
                            "frame": {}
                        },
                        "disabled": {
                            "icons": {
                                "dropdown": "dropdown:selectbox_normal"
                            },
                            "label": {
                                "color": "#E6D9C6"
                            },
                            "frame": {}
                        },
                        "readOnly": {
                            "icons": {
                                "dropdown": "dropdown:selectbox_normal"
                            },
                            "label": {},
                            "frame": {}
                        },
                        "normalError": {
                            "icons": {
                                "dropdown": "dropdown:selectbox_error"
                            },
                            "label": {},
                            "frame": {}
                        },
                        "normalErrorFocused": {
                            "icons": {
                                "dropdown": "dropdown:selectbox_error"
                            },
                            "label": {},
                            "frame": {}
                        },
                        "mandatoryError": {
                            "icons": {
                                "dropdown": "dropdown:selectbox_error"
                            },
                            "label": {},
                            "frame": {}
                        },
                        "mandatoryErrorFocused": {
                            "icons": {
                                "dropdown": "dropdown:selectbox_error"
                            },
                            "label": {},
                            "frame": {}
                        },
                        "normal": {
                            "icons": {
                                "dropdown": "dropdown:selectbox_normal"
                            },
                            "label": {},
                            "frame": {}
                        }
                    }
                },
                "std": {
                    "iconsRight": "dropdown",
                    "frame": {
                        "frameType": "FixedHeight"
                    },
                    "states": {
                        "readOnly": {
                            "icons": {
                                "dropdown": "dropdown:selectbox_normal"
                            },
                            "label": {},
                            "frame": {
                                "color": "#AB9B85",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": true,
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 7,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "mandatoryErrorFocused": {
                            "icons": {
                                "dropdown": "dropdown:selectbox_error"
                            },
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": true,
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 5,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "normalErrorFocused": {
                            "icons": {
                                "dropdown": "dropdown:selectbox_error"
                            },
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": true,
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 4,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "mandatory": {
                            "icons": {
                                "dropdown": "dropdown:selectbox_normal"
                            },
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": true,
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 1,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "normal": {
                            "icons": {
                                "dropdown": "dropdown:selectbox_normal"
                            },
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": true,
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 0,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "mandatoryFocused": {
                            "icons": {
                                "dropdown": "dropdown:selectbox_focused"
                            },
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": true,
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 3,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "mandatoryError": {
                            "icons": {
                                "dropdown": "dropdown:selectbox_error"
                            },
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": true,
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 5,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "normalFocused": {
                            "icons": {
                                "dropdown": "dropdown:selectbox_focused"
                            },
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": true,
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 2,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "disabled": {
                            "label": {
                                "color": "#E6D9C6"
                            },
                            "icons": {
                                "dropdown": "dropdown:selectbox_normal"
                            },
                            "frame": {
                                "color": "#E6D9C6",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": true,
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 6,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "normalError": {
                            "icons": {
                                "dropdown": "dropdown:selectbox_error"
                            },
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": true,
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 4,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        }
                    },
                    "offsetTop": 1,
                    "iconsLeft": "",
                    "simpleHTML": false,
                    "listSclass": "dropdown"
                },
                "aria:skinNormalized": true
            },
            "Button": {
                "important": {
                    "label": {
                        "fontWeight": "bold"
                    },
                    "simpleHTML": false,
                    "frame": {
                        "frameType": "FixedHeight"
                    },
                    "states": {
                        "msdown": {
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/buttonEdges_1-4-2.gif",
                                "spriteURLv": "atskin/sprites/buttonCentre_1-4-2.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "sprWidth": 17,
                                "sprHeight": 25,
                                "sprIdx": 1,
                                "sprSpacing": 2,
                                "spcLeft": 8,
                                "marginTop": 7,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 3
                            }
                        },
                        "msover": {
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/buttonEdges_1-4-2.gif",
                                "spriteURLv": "atskin/sprites/buttonCentre_1-4-2.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "sprWidth": 17,
                                "sprHeight": 25,
                                "sprIdx": 0,
                                "sprSpacing": 2,
                                "spcLeft": 8,
                                "marginTop": 5,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 5
                            }
                        },
                        "normalFocused": {
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/buttonEdges_1-4-2.gif",
                                "spriteURLv": "atskin/sprites/buttonCentre_1-4-2.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "sprWidth": 17,
                                "sprHeight": 25,
                                "sprIdx": 3,
                                "sprSpacing": 2,
                                "spcLeft": 8,
                                "marginTop": 5,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 5
                            }
                        },
                        "msoverFocused": {
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/buttonEdges_1-4-2.gif",
                                "spriteURLv": "atskin/sprites/buttonCentre_1-4-2.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "sprWidth": 17,
                                "sprHeight": 25,
                                "sprIdx": 3,
                                "sprSpacing": 2,
                                "spcLeft": 8,
                                "marginTop": 5,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 5
                            }
                        },
                        "disabled": {
                            "frame": {
                                "color": "#B0B0B0",
                                "spriteURL": "atskin/sprites/buttonEdges_1-4-2.gif",
                                "spriteURLv": "atskin/sprites/buttonCentre_1-4-2.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "sprWidth": 17,
                                "sprHeight": 25,
                                "sprIdx": 2,
                                "sprSpacing": 2,
                                "spcLeft": 8,
                                "marginTop": 5,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 5
                            }
                        },
                        "normal": {
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/buttonEdges_1-4-2.gif",
                                "spriteURLv": "atskin/sprites/buttonCentre_1-4-2.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "sprWidth": 17,
                                "sprHeight": 25,
                                "sprIdx": 0,
                                "sprSpacing": 2,
                                "spcLeft": 8,
                                "marginTop": 5,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 5
                            }
                        }
                    }
                },
                "simple": {
                    "simpleHTML": true,
                    "label": {
                        "fontWeight": "normal"
                    },
                    "frame": {
                        "frameType": "SimpleHTML"
                    },
                    "states": {
                        "msdown": {
                            "frame": {}
                        },
                        "msover": {
                            "frame": {}
                        },
                        "normalFocused": {
                            "frame": {}
                        },
                        "msoverFocused": {
                            "frame": {}
                        },
                        "disabled": {
                            "frame": {}
                        },
                        "normal": {
                            "frame": {}
                        }
                    }
                },
                "std": {
                    "frame": {
                        "frameType": "FixedHeight"
                    },
                    "states": {
                        "normal": {
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/buttonEdges_1-4-2.gif",
                                "spriteURLv": "atskin/sprites/buttonCentre_1-4-2.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "sprWidth": 17,
                                "sprHeight": 25,
                                "sprIdx": 0,
                                "sprSpacing": 2,
                                "spcLeft": 8,
                                "marginTop": 5,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 5
                            }
                        },
                        "disabled": {
                            "frame": {
                                "color": "#B0B0B0",
                                "spriteURL": "atskin/sprites/buttonEdges_1-4-2.gif",
                                "spriteURLv": "atskin/sprites/buttonCentre_1-4-2.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "sprWidth": 17,
                                "sprHeight": 25,
                                "sprIdx": 2,
                                "sprSpacing": 2,
                                "spcLeft": 8,
                                "marginTop": 5,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 5
                            }
                        },
                        "msdown": {
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/buttonEdges_1-4-2.gif",
                                "spriteURLv": "atskin/sprites/buttonCentre_1-4-2.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "sprWidth": 17,
                                "sprHeight": 25,
                                "sprIdx": 1,
                                "sprSpacing": 2,
                                "spcLeft": 8,
                                "marginTop": 7,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 3
                            }
                        },
                        "normalFocused": {
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/buttonEdges_1-4-2.gif",
                                "spriteURLv": "atskin/sprites/buttonCentre_1-4-2.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "sprWidth": 17,
                                "sprHeight": 25,
                                "sprIdx": 3,
                                "sprSpacing": 2,
                                "spcLeft": 8,
                                "marginTop": 5,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 5
                            }
                        },
                        "msoverFocused": {
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/buttonEdges_1-4-2.gif",
                                "spriteURLv": "atskin/sprites/buttonCentre_1-4-2.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "sprWidth": 17,
                                "sprHeight": 25,
                                "sprIdx": 3,
                                "sprSpacing": 2,
                                "spcLeft": 8,
                                "marginTop": 5,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 5
                            }
                        },
                        "msover": {
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/buttonEdges_1-4-2.gif",
                                "spriteURLv": "atskin/sprites/buttonCentre_1-4-2.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "sprWidth": 17,
                                "sprHeight": 25,
                                "sprIdx": 0,
                                "sprSpacing": 2,
                                "spcLeft": 8,
                                "marginTop": 5,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 5
                            }
                        }
                    },
                    "simpleHTML": false,
                    "label": {
                        "fontWeight": "normal"
                    }
                },
                "aria:skinNormalized": true
            },
            "Link": {
                "std": {
                    "states": {
                        "normal": {
                            "color": "#6365FF"
                        },
                        "hover": {
                            "color": "#6365FF"
                        },
                        "focus": {
                            "color": "#6365FF"
                        }
                    }
                },
                "aria:skinNormalized": true
            },
            "SelectBox": {
                "simple": {
                    "innerPaddingTop": 1,
                    "iconsRight": "dropdown",
                    "innerPaddingRight": 0,
                    "states": {
                        "readOnly": {
                            "color": "#AB9B85",
                            "icons": {
                                "dropdown": "dropdown:selectbox_normal"
                            },
                            "label": {},
                            "frame": {}
                        },
                        "mandatoryErrorFocused": {
                            "icons": {
                                "dropdown": "dropdown:selectbox_normal"
                            },
                            "color": "#000000",
                            "label": {},
                            "frame": {}
                        },
                        "normalErrorFocused": {
                            "icons": {
                                "dropdown": "dropdown:selectbox_normal"
                            },
                            "color": "#000000",
                            "label": {},
                            "frame": {}
                        },
                        "normal": {
                            "color": "#000000",
                            "icons": {
                                "dropdown": "dropdown:selectbox_normal"
                            },
                            "label": {},
                            "frame": {}
                        },
                        "mandatoryError": {
                            "icons": {
                                "dropdown": "dropdown:selectbox_normal"
                            },
                            "color": "#000000",
                            "label": {},
                            "frame": {}
                        },
                        "normalFocused": {
                            "icons": {
                                "dropdown": "dropdown:selectbox_normal"
                            },
                            "color": "#000000",
                            "label": {},
                            "frame": {}
                        },
                        "disabled": {
                            "color": "#E6D9C6",
                            "label": {
                                "color": "#E6D9C6"
                            },
                            "icons": {
                                "dropdown": "dropdown:selectbox_normal"
                            },
                            "frame": {}
                        },
                        "normalError": {
                            "icons": {
                                "dropdown": "dropdown:selectbox_normal"
                            },
                            "color": "#000000",
                            "label": {},
                            "frame": {}
                        },
                        "mandatory": {
                            "color": "#000000",
                            "icons": {
                                "dropdown": "dropdown:selectbox_normal"
                            },
                            "label": {},
                            "frame": {}
                        },
                        "mandatoryFocused": {
                            "color": "#000000",
                            "icons": {
                                "dropdown": "dropdown:selectbox_focused"
                            },
                            "label": {},
                            "frame": {}
                        },
                        "prefill": {
                            "color": "gray",
                            "icons": {
                                "dropdown": "dropdown:selectbox_normal"
                            },
                            "label": {},
                            "frame": {}
                        }
                    },
                    "helpText": {
                        "italics": true,
                        "color": "gray"
                    },
                    "offsetTop": 1,
                    "innerPaddingLeft": 0,
                    "innerPaddingBottom": 2,
                    "simpleHTML": true,
                    "iconsLeft": "",
                    "listSclass": "dropdown",
                    "label": {
                        "fontWeight": "normal"
                    },
                    "frame": {
                        "frameType": "SimpleHTML"
                    }
                },
                "std": {
                    "iconsRight": "dropdown",
                    "frame": {
                        "frameType": "FixedHeight"
                    },
                    "states": {
                        "readOnly": {
                            "icons": {
                                "dropdown": "dropdown:selectbox_normal"
                            },
                            "label": {},
                            "frame": {
                                "color": "#AB9B85",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": true,
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 7,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "mandatoryErrorFocused": {
                            "icons": {
                                "dropdown": "dropdown:selectbox_error"
                            },
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": true,
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 5,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "normalErrorFocused": {
                            "icons": {
                                "dropdown": "dropdown:selectbox_error"
                            },
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": true,
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 4,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "mandatory": {
                            "icons": {
                                "dropdown": "dropdown:selectbox_normal"
                            },
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": true,
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 1,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "normal": {
                            "icons": {
                                "dropdown": "dropdown:selectbox_normal"
                            },
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": true,
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 0,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "mandatoryFocused": {
                            "icons": {
                                "dropdown": "dropdown:selectbox_focused"
                            },
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": true,
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 3,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "prefill": {
                            "icons": {
                                "dropdown": "dropdown:selectbox_normal"
                            },
                            "label": {},
                            "frame": {
                                "color": "gray",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": true,
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 0,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "mandatoryError": {
                            "icons": {
                                "dropdown": "dropdown:selectbox_error"
                            },
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": true,
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 5,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "normalFocused": {
                            "icons": {
                                "dropdown": "dropdown:selectbox_focused"
                            },
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": true,
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 2,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "disabled": {
                            "label": {
                                "color": "#E6D9C6"
                            },
                            "icons": {
                                "dropdown": "dropdown:selectbox_normal"
                            },
                            "frame": {
                                "color": "#E6D9C6",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": true,
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 6,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "normalError": {
                            "icons": {
                                "dropdown": "dropdown:selectbox_error"
                            },
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": true,
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 4,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        }
                    },
                    "helpText": {
                        "italics": true,
                        "color": "gray"
                    },
                    "offsetTop": 1,
                    "iconsLeft": "",
                    "listSclass": "dropdown",
                    "simpleHTML": false,
                    "label": {
                        "fontWeight": "normal"
                    },
                    "innerPaddingTop": 0,
                    "innerPaddingRight": 0,
                    "innerPaddingBottom": 0,
                    "innerPaddingLeft": 0
                },
                "aria:skinNormalized": true
            },
            "TextInput": {
                "simpleIcon": {
                    "states": {
                        "normal": {
                            "icons": {
                                "dropdownIsActive": false,
                                "dropdown": "std:confirm"
                            },
                            "color": "#000000",
                            "label": {},
                            "frame": {}
                        },
                        "normalError": {
                            "icons": {
                                "dropdownIsActive": false,
                                "dropdown": "std:error"
                            },
                            "color": "#000000",
                            "label": {},
                            "frame": {}
                        },
                        "normalFocused": {
                            "color": "#000000",
                            "icons": {
                                "dropdownIsActive": false,
                                "dropdown": "std:confirm"
                            },
                            "label": {},
                            "frame": {}
                        },
                        "mandatory": {
                            "color": "#000000",
                            "icons": {
                                "dropdownIsActive": false,
                                "dropdown": "std:confirm"
                            },
                            "label": {},
                            "frame": {}
                        },
                        "mandatoryFocused": {
                            "color": "#000000",
                            "icons": {
                                "dropdownIsActive": false,
                                "dropdown": "std:confirm"
                            },
                            "label": {},
                            "frame": {}
                        },
                        "normalErrorFocused": {
                            "color": "#000000",
                            "icons": {
                                "dropdownIsActive": false,
                                "dropdown": "std:confirm"
                            },
                            "label": {},
                            "frame": {}
                        },
                        "mandatoryError": {
                            "color": "#000000",
                            "icons": {
                                "dropdownIsActive": false,
                                "dropdown": "std:confirm"
                            },
                            "label": {},
                            "frame": {}
                        },
                        "mandatoryErrorFocused": {
                            "color": "#000000",
                            "icons": {
                                "dropdownIsActive": false,
                                "dropdown": "std:confirm"
                            },
                            "label": {},
                            "frame": {}
                        },
                        "disabled": {
                            "color": "#E6D9C6",
                            "icons": {
                                "dropdownIsActive": false,
                                "dropdown": "std:confirm"
                            },
                            "label": {
                                "color": "#E6D9C6"
                            },
                            "frame": {}
                        },
                        "readOnly": {
                            "color": "#AB9B85",
                            "icons": {
                                "dropdownIsActive": false,
                                "dropdown": "std:confirm"
                            },
                            "label": {},
                            "frame": {}
                        },
                        "prefill": {
                            "color": "gray",
                            "icons": {
                                "dropdownIsActive": false,
                                "dropdown": "std:confirm"
                            },
                            "label": {},
                            "frame": {}
                        }
                    },
                    "iconsLeft": "dropdown",
                    "simpleHTML": true,
                    "label": {
                        "fontWeight": "normal"
                    },
                    "helpText": {
                        "color": "gray",
                        "italics": true
                    },
                    "innerPaddingTop": 0,
                    "innerPaddingRight": 0,
                    "innerPaddingBottom": 0,
                    "innerPaddingLeft": 2,
                    "frame": {
                        "frameType": "SimpleHTML"
                    }
                },
                "important": {
                    "label": {
                        "fontWeight": "bold"
                    },
                    "simpleHTML": false,
                    "helpText": {
                        "color": "gray",
                        "italics": true
                    },
                    "innerPaddingTop": 0,
                    "innerPaddingRight": 0,
                    "innerPaddingBottom": 0,
                    "innerPaddingLeft": 2,
                    "frame": {
                        "frameType": "FixedHeight"
                    },
                    "states": {
                        "normalFocused": {
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 2,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "mandatory": {
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 1,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "mandatoryFocused": {
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 3,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "normalError": {
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 4,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "normalErrorFocused": {
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 4,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "mandatoryError": {
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 5,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "mandatoryErrorFocused": {
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 5,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "disabled": {
                            "label": {
                                "color": "#E6D9C6"
                            },
                            "frame": {
                                "color": "#E6D9C6",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 6,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "readOnly": {
                            "label": {},
                            "frame": {
                                "color": "#AB9B85",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 7,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "prefill": {
                            "label": {},
                            "frame": {
                                "color": "gray",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 0,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "normal": {
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 0,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        }
                    }
                },
                "simple": {
                    "simpleHTML": true,
                    "label": {
                        "fontWeight": "normal"
                    },
                    "helpText": {
                        "color": "gray",
                        "italics": true
                    },
                    "innerPaddingTop": 0,
                    "innerPaddingRight": 0,
                    "innerPaddingBottom": 0,
                    "innerPaddingLeft": 2,
                    "frame": {
                        "frameType": "SimpleHTML"
                    },
                    "states": {
                        "normalFocused": {
                            "color": "#000000",
                            "label": {},
                            "frame": {}
                        },
                        "mandatory": {
                            "color": "#000000",
                            "label": {},
                            "frame": {}
                        },
                        "mandatoryFocused": {
                            "color": "#000000",
                            "label": {},
                            "frame": {}
                        },
                        "normalError": {
                            "color": "#000000",
                            "label": {},
                            "frame": {}
                        },
                        "normalErrorFocused": {
                            "color": "#000000",
                            "label": {},
                            "frame": {}
                        },
                        "mandatoryError": {
                            "color": "#000000",
                            "label": {},
                            "frame": {}
                        },
                        "mandatoryErrorFocused": {
                            "color": "#000000",
                            "label": {},
                            "frame": {}
                        },
                        "disabled": {
                            "color": "#E6D9C6",
                            "label": {
                                "color": "#E6D9C6"
                            },
                            "frame": {}
                        },
                        "readOnly": {
                            "color": "#AB9B85",
                            "label": {},
                            "frame": {}
                        },
                        "prefill": {
                            "color": "gray",
                            "label": {},
                            "frame": {}
                        },
                        "normal": {
                            "color": "#000000",
                            "label": {},
                            "frame": {}
                        }
                    }
                },
                "std": {
                    "innerPaddingTop": 0,
                    "innerPaddingRight": 0,
                    "frame": {
                        "frameType": "FixedHeight"
                    },
                    "states": {
                        "readOnly": {
                            "label": {},
                            "frame": {
                                "color": "#AB9B85",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 7,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "normalErrorFocused": {
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 4,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "mandatoryErrorFocused": {
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 5,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "mandatory": {
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 1,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "normal": {
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 0,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "mandatoryFocused": {
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 3,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "prefill": {
                            "label": {},
                            "frame": {
                                "color": "gray",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 0,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "mandatoryError": {
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 5,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "normalFocused": {
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 2,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "disabled": {
                            "label": {
                                "color": "#E6D9C6"
                            },
                            "frame": {
                                "color": "#E6D9C6",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 6,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "normalError": {
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 4,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        }
                    },
                    "helpText": {
                        "italics": true,
                        "color": "gray"
                    },
                    "innerPaddingLeft": 2,
                    "innerPaddingBottom": 0,
                    "simpleHTML": false,
                    "label": {
                        "fontWeight": "normal"
                    }
                },
                "aria:skinNormalized": true
            },
            "CheckBox": {
                "simple": {
                    "simpleHTML": true,
                    "iconset": "checkBoxes",
                    "iconprefix": "cb_",
                    "states": {
                        "normalSelected": {
                            "color": "#000000"
                        },
                        "focused": {
                            "color": "#000000"
                        },
                        "focusedSelected": {
                            "color": "#000000"
                        },
                        "disabled": {
                            "color": "#B0B0B0"
                        },
                        "disabledSelected": {
                            "color": "#B0B0B0"
                        },
                        "readonly": {
                            "color": "#B0B0B0"
                        },
                        "readonlySelected": {
                            "color": "#B0B0B0"
                        },
                        "normal": {
                            "color": "#000000"
                        }
                    }
                },
                "std": {
                    "iconset": "checkBoxes",
                    "iconprefix": "cb_",
                    "states": {
                        "disabledSelected": {
                            "color": "#B0B0B0"
                        },
                        "normal": {
                            "color": "#000000"
                        },
                        "focusedSelected": {
                            "color": "#000000"
                        },
                        "focused": {
                            "color": "#000000"
                        },
                        "normalSelected": {
                            "color": "#000000"
                        },
                        "readonlySelected": {
                            "color": "#B0B0B0"
                        },
                        "readonly": {
                            "color": "#B0B0B0"
                        },
                        "disabled": {
                            "color": "#B0B0B0"
                        }
                    },
                    "simpleHTML": false
                },
                "aria:skinNormalized": true
            },
            "Tab": {
                "demoMainTabs": {
                    "frame": {
                        "frameType": "Table"
                    },
                    "states": {
                        "selectedFocused": {
                            "frame": {
                                "sprWidth": 44,
                                "sprHeight": 24,
                                "sprIdx": 0,
                                "sprSpacing": 2,
                                "spcLeft": 22,
                                "spcTop": 14,
                                "spriteURL": "atskin/sprites/tabs.png",
                                "spriteURLv": "atskin/sprites/tabs_v.png",
                                "spriteURLh": "atskin/sprites/tabs_h.png",
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "color": "#4776A7",
                                "backgroundColor": "#FFFFFF",
                                "frameIcon": "",
                                "frameIconHPos": "left",
                                "frameIconVPos": "bottom"
                            }
                        },
                        "selected": {
                            "frame": {
                                "sprWidth": 44,
                                "sprHeight": 24,
                                "sprIdx": 0,
                                "sprSpacing": 2,
                                "spcLeft": 22,
                                "spcTop": 14,
                                "spriteURL": "atskin/sprites/tabs.png",
                                "spriteURLv": "atskin/sprites/tabs_v.png",
                                "spriteURLh": "atskin/sprites/tabs_h.png",
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "color": "#4776A7",
                                "backgroundColor": "#FFFFFF",
                                "frameIcon": "",
                                "frameIconHPos": "left",
                                "frameIconVPos": "bottom"
                            }
                        },
                        "normal": {
                            "frame": {
                                "sprWidth": 44,
                                "sprHeight": 24,
                                "sprIdx": 1,
                                "sprSpacing": 2,
                                "spcLeft": 22,
                                "spcTop": 17,
                                "spriteURL": "atskin/sprites/tabs.png",
                                "spriteURLv": "atskin/sprites/tabs_v.png",
                                "spriteURLh": "atskin/sprites/tabs_h.png",
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "color": "#fff",
                                "backgroundColor": "#4776A7",
                                "frameIcon": "",
                                "frameIconHPos": "left",
                                "frameIconVPos": "bottom"
                            }
                        },
                        "msoverFocused": {
                            "frame": {
                                "sprWidth": 44,
                                "sprHeight": 24,
                                "sprIdx": 2,
                                "sprSpacing": 2,
                                "spcLeft": 22,
                                "spcTop": 17,
                                "spriteURL": "atskin/sprites/tabs.png",
                                "spriteURLv": "atskin/sprites/tabs_v.png",
                                "spriteURLh": "atskin/sprites/tabs_h.png",
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "color": "#fff",
                                "backgroundColor": "#2f6093",
                                "frameIcon": "",
                                "frameIconHPos": "left",
                                "frameIconVPos": "bottom"
                            }
                        },
                        "msover": {
                            "frame": {
                                "sprWidth": 44,
                                "sprHeight": 24,
                                "sprIdx": 2,
                                "sprSpacing": 2,
                                "spcLeft": 22,
                                "spcTop": 17,
                                "spriteURL": "atskin/sprites/tabs.png",
                                "spriteURLv": "atskin/sprites/tabs_v.png",
                                "spriteURLh": "atskin/sprites/tabs_h.png",
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "color": "#fff",
                                "backgroundColor": "#2f6093",
                                "frameIcon": "",
                                "frameIconHPos": "left",
                                "frameIconVPos": "bottom"
                            }
                        },
                        "disabled": {
                            "frame": {
                                "sprWidth": 44,
                                "sprHeight": 40,
                                "sprIdx": 3,
                                "sprSpacing": 2,
                                "spcLeft": 22,
                                "spcTop": 17,
                                "spriteURL": "atskin/sprites/tabs.png",
                                "spriteURLv": "atskin/sprites/tabs_v.png",
                                "spriteURLh": "atskin/sprites/tabs_h.png",
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "color": "#4776A7",
                                "backgroundColor": "#444444",
                                "frameIcon": "",
                                "frameIconHPos": "left",
                                "frameIconVPos": "bottom"
                            }
                        },
                        "normalFocused": {
                            "frame": {
                                "sprWidth": 44,
                                "sprHeight": 24,
                                "sprIdx": 1,
                                "sprSpacing": 2,
                                "spcLeft": 22,
                                "spcTop": 17,
                                "spriteURL": "atskin/sprites/tabs.png",
                                "spriteURLv": "atskin/sprites/tabs_v.png",
                                "spriteURLh": "atskin/sprites/tabs_h.png",
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "color": "#fff",
                                "backgroundColor": "#4776A7",
                                "frameIcon": "",
                                "frameIconHPos": "left",
                                "frameIconVPos": "bottom"
                            }
                        }
                    }
                },
                "std": {
                    "frame": {
                        "frameType": "Table"
                    },
                    "states": {
                        "selectedFocused": {
                            "frame": {
                                "sprWidth": 44,
                                "sprHeight": 24,
                                "sprIdx": 0,
                                "sprSpacing": 2,
                                "spcLeft": 22,
                                "spcTop": 14,
                                "spriteURL": "atskin/sprites/tabs.png",
                                "spriteURLv": "atskin/sprites/tabs_v.png",
                                "spriteURLh": "atskin/sprites/tabs_h.png",
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "color": "#4776A7",
                                "backgroundColor": "#FFFFFF",
                                "frameIcon": "",
                                "frameIconHPos": "left",
                                "frameIconVPos": "bottom"
                            }
                        },
                        "selected": {
                            "frame": {
                                "sprWidth": 44,
                                "sprHeight": 24,
                                "sprIdx": 0,
                                "sprSpacing": 2,
                                "spcLeft": 22,
                                "spcTop": 14,
                                "spriteURL": "atskin/sprites/tabs.png",
                                "spriteURLv": "atskin/sprites/tabs_v.png",
                                "spriteURLh": "atskin/sprites/tabs_h.png",
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "color": "#4776A7",
                                "backgroundColor": "#FFFFFF",
                                "frameIcon": "",
                                "frameIconHPos": "left",
                                "frameIconVPos": "bottom"
                            }
                        },
                        "normal": {
                            "frame": {
                                "sprWidth": 44,
                                "sprHeight": 24,
                                "sprIdx": 1,
                                "sprSpacing": 2,
                                "spcLeft": 22,
                                "spcTop": 17,
                                "spriteURL": "atskin/sprites/tabs.png",
                                "spriteURLv": "atskin/sprites/tabs_v.png",
                                "spriteURLh": "atskin/sprites/tabs_h.png",
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "color": "#fff",
                                "backgroundColor": "#4c7bac",
                                "frameIcon": "",
                                "frameIconHPos": "left",
                                "frameIconVPos": "bottom"
                            }
                        },
                        "msoverFocused": {
                            "frame": {
                                "sprWidth": 44,
                                "sprHeight": 24,
                                "sprIdx": 2,
                                "sprSpacing": 2,
                                "spcLeft": 22,
                                "spcTop": 17,
                                "spriteURL": "atskin/sprites/tabs.png",
                                "spriteURLv": "atskin/sprites/tabs_v.png",
                                "spriteURLh": "atskin/sprites/tabs_h.png",
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "color": "#fff",
                                "backgroundColor": "#2f6093",
                                "frameIcon": "",
                                "frameIconHPos": "left",
                                "frameIconVPos": "bottom"
                            }
                        },
                        "msover": {
                            "frame": {
                                "sprWidth": 44,
                                "sprHeight": 24,
                                "sprIdx": 2,
                                "sprSpacing": 2,
                                "spcLeft": 22,
                                "spcTop": 17,
                                "spriteURL": "atskin/sprites/tabs.png",
                                "spriteURLv": "atskin/sprites/tabs_v.png",
                                "spriteURLh": "atskin/sprites/tabs_h.png",
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "color": "#fff",
                                "backgroundColor": "#2f6093",
                                "frameIcon": "",
                                "frameIconHPos": "left",
                                "frameIconVPos": "bottom"
                            }
                        },
                        "disabled": {
                            "frame": {
                                "sprWidth": 44,
                                "sprHeight": 24,
                                "sprIdx": 1,
                                "sprSpacing": 2,
                                "spcLeft": 22,
                                "spcTop": 17,
                                "spriteURL": "atskin/sprites/tabs.png",
                                "spriteURLv": "atskin/sprites/tabs_v.png",
                                "spriteURLh": "atskin/sprites/tabs_h.png",
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "color": "#C2C3C6",
                                "backgroundColor": "#4c7bac",
                                "frameIcon": "",
                                "frameIconHPos": "left",
                                "frameIconVPos": "bottom"
                            }
                        },
                        "normalFocused": {
                            "frame": {
                                "sprWidth": 44,
                                "sprHeight": 24,
                                "sprIdx": 1,
                                "sprSpacing": 2,
                                "spcLeft": 22,
                                "spcTop": 17,
                                "spriteURL": "atskin/sprites/tabs.png",
                                "spriteURLv": "atskin/sprites/tabs_v.png",
                                "spriteURLh": "atskin/sprites/tabs_h.png",
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "color": "#fff",
                                "backgroundColor": "#4c7bac",
                                "frameIcon": "",
                                "frameIconHPos": "left",
                                "frameIconVPos": "bottom"
                            }
                        }
                    }
                },
                "aria:skinNormalized": true
            },
            "List": {
                "std": {
                    "mouseOverBackgroundColor": "#fc6",
                    "selectedItemColor": "#000",
                    "selectedItemBackgroundColor": "#fc6",
                    "divsclass": "list",
                    "mouseOverColor": "#000",
                    "enabledColor": "#666",
                    "highlightMouseOver": true,
                    "link": {
                        "marginLeft": 3,
                        "marginRight": 3
                    },
                    "footer": {
                        "padding": 5,
                        "backgroundColor": "#eadbc8",
                        "borderColor": "#d3c3ab",
                        "borderTopOnly": false,
                        "borderStyle": "solid",
                        "borderWidth": 1,
                        "marginTop": 5,
                        "marginRight": 0,
                        "marginBottom": 0,
                        "marginLeft": -1
                    }
                },
                "dropdown": {
                    "highlightMouseOver": false,
                    "divsclass": "dropdown",
                    "enabledColor": "#666",
                    "mouseOverBackgroundColor": "#fc6",
                    "mouseOverColor": "#000",
                    "selectedItemBackgroundColor": "#fc6",
                    "selectedItemColor": "#000",
                    "link": {
                        "marginLeft": 3,
                        "marginRight": 3
                    },
                    "footer": {
                        "padding": 5,
                        "backgroundColor": "#eadbc8",
                        "borderColor": "#d3c3ab",
                        "borderTopOnly": false,
                        "borderStyle": "solid",
                        "borderWidth": 1,
                        "marginTop": 5,
                        "marginRight": 0,
                        "marginBottom": 0,
                        "marginLeft": -1
                    }
                },
                "aria:skinNormalized": true
            },
            "Icon": {
                "autoCompleteAirTrain": {
                    "content": {
                        "airport": 1,
                        "sub": 7,
                        "multiple_train": 5,
                        "star": 0,
                        "train": 4,
                        "multiple_airport": 2,
                        "city": 6,
                        "train_airport": 3
                    },
                    "spriteSpacing": 2,
                    "direction": "x",
                    "iconWidth": 16,
                    "spriteURL": "atskin/sprites/airtrainicons_16x16.gif",
                    "iconHeight": 16,
                    "biDimensional": false,
                    "backgroundColor": "",
                    "borderTopLeftRadius": 0,
                    "borderTopRightRadius": 0,
                    "borderBottomLeftRadius": 0,
                    "borderBottomRightRadius": 0,
                    "borderTop": 0,
                    "borderBottom": 0,
                    "borderRight": 0,
                    "borderLeft": 0
                },
                "checkBoxes": {
                    "content": {
                        "cb_disabled": 4,
                        "rb_disabled": 12,
                        "cb_focusedSelected": 3,
                        "cb_focused": 2,
                        "cb_disabledSelected": 5,
                        "rb_readonlySelected": 15,
                        "rb_normalSelected": 9,
                        "cb_readonly": 6,
                        "cb_normalSelected": 1,
                        "rb_focusedSelected": 11,
                        "rb_readonly": 14,
                        "cb_readonlySelected": 7,
                        "rb_disabledSelected": 13,
                        "rb_focused": 10,
                        "cb_normal": 0,
                        "rb_normal": 8
                    },
                    "spriteSpacing": 3,
                    "direction": "x",
                    "iconWidth": 19,
                    "spriteURL": "atskin/sprites/checkbox.png",
                    "iconHeight": 18,
                    "biDimensional": false,
                    "backgroundColor": "",
                    "borderTopLeftRadius": 0,
                    "borderTopRightRadius": 0,
                    "borderBottomLeftRadius": 0,
                    "borderBottomRightRadius": 0,
                    "borderTop": 0,
                    "borderBottom": 0,
                    "borderRight": 0,
                    "borderLeft": 0
                },
                "std": {
                    "content": {
                        "hand_bag": 29,
                        "amn_pch": 8,
                        "save": 23,
                        "undo": 25,
                        "amn_saf": 12,
                        "zoom_in": 21,
                        "amn_swi": 15,
                        "validated": 36,
                        "amn_bus": 2,
                        "info": 17,
                        "amn_res": 10,
                        "close": 24,
                        "maximize": 42,
                        "amn_lau": 5,
                        "rm_line": 20,
                        "missing": 38,
                        "amn_spa": 14,
                        "help": 41,
                        "up_arrow": 35,
                        "left_arrow": 32,
                        "down_arrow": 33,
                        "amn_chi": 3,
                        "expand": 30,
                        "baby": 27,
                        "collapse": 31,
                        "error": 39,
                        "amn_pet": 9,
                        "zoom_out": 22,
                        "amn_hea": 4,
                        "add_line": 19,
                        "amn_roo": 11,
                        "amn_wif": 16,
                        "fire": 18,
                        "amn_air": 0,
                        "amn_gym": 4,
                        "amn_mee": 6,
                        "amn_bar": 1,
                        "extended_seat": 28,
                        "right_arrow": 34,
                        "redo": 26,
                        "amn_sea": 13,
                        "amn_par": 7,
                        "confirm": 40,
                        "warning": 37
                    },
                    "spriteSpacing": 2,
                    "direction": "x",
                    "iconWidth": 16,
                    "spriteURL": "atskin/sprites/icons_16x16.gif",
                    "iconHeight": 16,
                    "biDimensional": false,
                    "backgroundColor": "",
                    "borderTopLeftRadius": 0,
                    "borderTopRightRadius": 0,
                    "borderBottomLeftRadius": 0,
                    "borderBottomRightRadius": 0,
                    "borderTop": 0,
                    "borderBottom": 0,
                    "borderRight": 0,
                    "borderLeft": 0
                },
                "dropdown": {
                    "content": {
                        "multiselect_error": 8,
                        "datepicker_focused": 4,
                        "selectbox_focused": 1,
                        "multiselect_focused": 7,
                        "datepicker_error": 5,
                        "datepicker_normal": 3,
                        "multiselect_normal": 6,
                        "selectbox_error": 2,
                        "selectbox_normal": 0
                    },
                    "spriteSpacing": 2,
                    "direction": "x",
                    "iconWidth": 14,
                    "spriteURL": "atskin/imgs/dropdownbtns.gif",
                    "iconHeight": 20,
                    "biDimensional": false,
                    "backgroundColor": "",
                    "borderTopLeftRadius": 0,
                    "borderTopRightRadius": 0,
                    "borderBottomLeftRadius": 0,
                    "borderBottomRightRadius": 0,
                    "borderTop": 0,
                    "borderBottom": 0,
                    "borderRight": 0,
                    "borderLeft": 0
                },
                "sortIndicator": {
                    "content": {
                        "si_normal": 0,
                        "si_ascending": 2,
                        "si_descending": 1
                    },
                    "spriteSpacing": 0,
                    "direction": "x",
                    "iconWidth": 15,
                    "spriteURL": "atskin/sprites/sortlist.gif",
                    "iconHeight": 11,
                    "biDimensional": false,
                    "backgroundColor": "",
                    "borderTopLeftRadius": 0,
                    "borderTopRightRadius": 0,
                    "borderBottomLeftRadius": 0,
                    "borderBottomRightRadius": 0,
                    "borderTop": 0,
                    "borderBottom": 0,
                    "borderRight": 0,
                    "borderLeft": 0
                },
                "aria:skinNormalized": true
            },
            "AutoComplete": {
                "simple": {
                    "simpleHTML": true,
                    "listSclass": "dropdown",
                    "offsetTop": 1,
                    "iconsRight": "dropdown",
                    "label": {
                        "fontWeight": "normal"
                    },
                    "helpText": {
                        "color": "gray",
                        "italics": true
                    },
                    "innerPaddingTop": 0,
                    "innerPaddingRight": 0,
                    "innerPaddingBottom": 0,
                    "innerPaddingLeft": 0,
                    "frame": {
                        "frameType": "SimpleHTML"
                    },
                    "states": {
                        "normalFocused": {
                            "color": "#000000",
                            "icons": {
                                "dropdown": "dropdown:multiselect_focused"
                            },
                            "label": {},
                            "frame": {}
                        },
                        "mandatory": {
                            "color": "#000000",
                            "icons": {
                                "dropdown": "dropdown:multiselect_normal"
                            },
                            "label": {},
                            "frame": {}
                        },
                        "mandatoryFocused": {
                            "color": "#000000",
                            "icons": {
                                "dropdown": "dropdown:multiselect_normal"
                            },
                            "label": {},
                            "frame": {}
                        },
                        "normalError": {
                            "color": "#000000",
                            "icons": {
                                "dropdown": "dropdown:multiselect_error"
                            },
                            "label": {},
                            "frame": {}
                        },
                        "normalErrorFocused": {
                            "color": "#000000",
                            "icons": {
                                "dropdown": "dropdown:multiselect_error"
                            },
                            "label": {},
                            "frame": {}
                        },
                        "mandatoryError": {
                            "color": "#000000",
                            "icons": {
                                "dropdown": "dropdown:multiselect_error"
                            },
                            "label": {},
                            "frame": {}
                        },
                        "mandatoryErrorFocused": {
                            "color": "#000000",
                            "icons": {
                                "dropdown": "dropdown:multiselect_error"
                            },
                            "label": {},
                            "frame": {}
                        },
                        "disabled": {
                            "color": "#E6D9C6",
                            "icons": {
                                "dropdown": "dropdown:multiselect_normal"
                            },
                            "label": {
                                "color": "#E6D9C6"
                            },
                            "frame": {}
                        },
                        "readOnly": {
                            "color": "#AB9B85",
                            "icons": {
                                "dropdown": "dropdown:multiselect_normal"
                            },
                            "label": {},
                            "frame": {}
                        },
                        "prefill": {
                            "color": "gray",
                            "icons": {
                                "dropdown": "dropdown:multiselect_normal"
                            },
                            "label": {},
                            "frame": {}
                        },
                        "normal": {
                            "color": "#000000",
                            "icons": {
                                "dropdown": "dropdown:multiselect_normal"
                            },
                            "label": {},
                            "frame": {}
                        }
                    }
                },
                "important": {
                    "label": {
                        "fontWeight": "bold"
                    },
                    "listSclass": "dropdown",
                    "offsetTop": 1,
                    "simpleHTML": false,
                    "iconsRight": "dropdown",
                    "helpText": {
                        "color": "gray",
                        "italics": true
                    },
                    "innerPaddingTop": 0,
                    "innerPaddingRight": 0,
                    "innerPaddingBottom": 0,
                    "innerPaddingLeft": 0,
                    "frame": {
                        "frameType": "FixedHeight"
                    },
                    "states": {
                        "normalFocused": {
                            "icons": {
                                "dropdown": "dropdown:multiselect_focused"
                            },
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": "dependsOnIcon",
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 2,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "mandatory": {
                            "icons": {
                                "dropdown": "dropdown:multiselect_normal"
                            },
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": "dependsOnIcon",
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 1,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "mandatoryFocused": {
                            "icons": {
                                "dropdown": "dropdown:multiselect_normal"
                            },
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": "dependsOnIcon",
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 3,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "normalError": {
                            "icons": {
                                "dropdown": "dropdown:multiselect_error"
                            },
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": "dependsOnIcon",
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 4,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "normalErrorFocused": {
                            "icons": {
                                "dropdown": "dropdown:multiselect_error"
                            },
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": "dependsOnIcon",
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 4,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "mandatoryError": {
                            "icons": {
                                "dropdown": "dropdown:multiselect_error"
                            },
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": "dependsOnIcon",
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 5,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "mandatoryErrorFocused": {
                            "icons": {
                                "dropdown": "dropdown:multiselect_error"
                            },
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": "dependsOnIcon",
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 5,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "disabled": {
                            "icons": {
                                "dropdown": "dropdown:multiselect_normal"
                            },
                            "label": {
                                "color": "#E6D9C6"
                            },
                            "frame": {
                                "color": "#E6D9C6",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": "dependsOnIcon",
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 6,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "readOnly": {
                            "icons": {
                                "dropdown": "dropdown:multiselect_normal"
                            },
                            "label": {},
                            "frame": {
                                "color": "#AB9B85",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": "dependsOnIcon",
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 7,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "prefill": {
                            "icons": {
                                "dropdown": "dropdown:multiselect_normal"
                            },
                            "label": {},
                            "frame": {
                                "color": "gray",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": "dependsOnIcon",
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 0,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "normal": {
                            "icons": {
                                "dropdown": "dropdown:multiselect_normal"
                            },
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": "dependsOnIcon",
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 0,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        }
                    }
                },
                "underlineError": {
                    "frame": {
                        "frameType": "FixedHeight"
                    },
                    "states": {
                        "readOnly": {
                            "icons": {
                                "dropdown": "dropdown:multiselect_normal"
                            },
                            "label": {},
                            "frame": {
                                "color": "#AB9B85",
                                "spriteURL": "atskin/sprites/inputEdgeUnderlineError.gif",
                                "spriteURLv": "atskin/sprites/inputCentreUnderlineError.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": "dependsOnIcon",
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 7,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "normalErrorFocused": {
                            "icons": {
                                "dropdown": "dropdown:multiselect_error"
                            },
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdgeUnderlineError.gif",
                                "spriteURLv": "atskin/sprites/inputCentreUnderlineError.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": "dependsOnIcon",
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 4,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "mandatoryErrorFocused": {
                            "icons": {
                                "dropdown": "dropdown:multiselect_error"
                            },
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdgeUnderlineError.gif",
                                "spriteURLv": "atskin/sprites/inputCentreUnderlineError.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": "dependsOnIcon",
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 5,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "mandatory": {
                            "icons": {
                                "dropdown": "dropdown:multiselect_normal"
                            },
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdgeUnderlineError.gif",
                                "spriteURLv": "atskin/sprites/inputCentreUnderlineError.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": "dependsOnIcon",
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 1,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "normal": {
                            "icons": {
                                "dropdown": "dropdown:multiselect_normal"
                            },
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdgeUnderlineError.gif",
                                "spriteURLv": "atskin/sprites/inputCentreUnderlineError.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": "dependsOnIcon",
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 0,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "mandatoryFocused": {
                            "icons": {
                                "dropdown": "dropdown:multiselect_normal"
                            },
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdgeUnderlineError.gif",
                                "spriteURLv": "atskin/sprites/inputCentreUnderlineError.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": "dependsOnIcon",
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 3,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "mandatoryError": {
                            "icons": {
                                "dropdown": "dropdown:multiselect_error"
                            },
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdgeUnderlineError.gif",
                                "spriteURLv": "atskin/sprites/inputCentreUnderlineError.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": "dependsOnIcon",
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 9,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "normalFocused": {
                            "icons": {
                                "dropdown": "dropdown:multiselect_focused"
                            },
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdgeUnderlineError.gif",
                                "spriteURLv": "atskin/sprites/inputCentreUnderlineError.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": "dependsOnIcon",
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 2,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "disabled": {
                            "label": {
                                "color": "#E6D9C6"
                            },
                            "icons": {
                                "dropdown": "dropdown:multiselect_normal"
                            },
                            "frame": {
                                "color": "#E6D9C6",
                                "spriteURL": "atskin/sprites/inputEdgeUnderlineError.gif",
                                "spriteURLv": "atskin/sprites/inputCentreUnderlineError.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": "dependsOnIcon",
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 6,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "normalError": {
                            "icons": {
                                "dropdown": "dropdown:multiselect_error"
                            },
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdgeUnderlineError.gif",
                                "spriteURLv": "atskin/sprites/inputCentreUnderlineError.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": "dependsOnIcon",
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 8,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "prefill": {
                            "icons": {
                                "dropdown": "dropdown:multiselect_normal"
                            },
                            "label": {},
                            "frame": {
                                "color": "gray",
                                "spriteURL": "atskin/sprites/inputEdgeUnderlineError.gif",
                                "spriteURLv": "atskin/sprites/inputCentreUnderlineError.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": "dependsOnIcon",
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 0,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        }
                    },
                    "listSclass": "dropdown",
                    "offsetTop": 1,
                    "simpleHTML": false,
                    "iconsRight": "dropdown",
                    "label": {
                        "fontWeight": "normal"
                    },
                    "helpText": {
                        "color": "gray",
                        "italics": true
                    },
                    "innerPaddingTop": 0,
                    "innerPaddingRight": 0,
                    "innerPaddingBottom": 0,
                    "innerPaddingLeft": 0
                },
                "std": {
                    "iconsRight": "dropdown",
                    "frame": {
                        "frameType": "FixedHeight"
                    },
                    "states": {
                        "readOnly": {
                            "icons": {
                                "dropdown": "dropdown:multiselect_normal"
                            },
                            "label": {},
                            "frame": {
                                "color": "#AB9B85",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": "dependsOnIcon",
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 7,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "mandatoryErrorFocused": {
                            "icons": {
                                "dropdown": "dropdown:multiselect_error"
                            },
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": "dependsOnIcon",
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 5,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "normalErrorFocused": {
                            "icons": {
                                "dropdown": "dropdown:multiselect_error"
                            },
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": "dependsOnIcon",
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 4,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "mandatory": {
                            "icons": {
                                "dropdown": "dropdown:multiselect_normal"
                            },
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": "dependsOnIcon",
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 1,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "normal": {
                            "icons": {
                                "dropdown": "dropdown:multiselect_normal"
                            },
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": "dependsOnIcon",
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 0,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "mandatoryFocused": {
                            "icons": {
                                "dropdown": "dropdown:multiselect_normal"
                            },
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": "dependsOnIcon",
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 3,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "prefill": {
                            "icons": {
                                "dropdown": "dropdown:multiselect_normal"
                            },
                            "label": {},
                            "frame": {
                                "color": "gray",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": "dependsOnIcon",
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 0,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "mandatoryError": {
                            "icons": {
                                "dropdown": "dropdown:multiselect_error"
                            },
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": "dependsOnIcon",
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 5,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "normalFocused": {
                            "icons": {
                                "dropdown": "dropdown:multiselect_focused"
                            },
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": "dependsOnIcon",
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 2,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "disabled": {
                            "label": {
                                "color": "#E6D9C6"
                            },
                            "icons": {
                                "dropdown": "dropdown:multiselect_normal"
                            },
                            "frame": {
                                "color": "#E6D9C6",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": "dependsOnIcon",
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 6,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        },
                        "normalError": {
                            "icons": {
                                "dropdown": "dropdown:multiselect_error"
                            },
                            "label": {},
                            "frame": {
                                "color": "#000000",
                                "spriteURL": "atskin/sprites/inputEdge.gif",
                                "spriteURLv": "atskin/sprites/inputCentre.gif",
                                "skipLeftBorder": false,
                                "skipRightBorder": "dependsOnIcon",
                                "sprWidth": 7,
                                "sprHeight": 20,
                                "sprIdx": 4,
                                "sprSpacing": 2,
                                "spcLeft": 3,
                                "marginTop": 3,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 2
                            }
                        }
                    },
                    "helpText": {
                        "italics": true,
                        "color": "gray"
                    },
                    "offsetTop": 1,
                    "listSclass": "dropdown",
                    "simpleHTML": false,
                    "label": {
                        "fontWeight": "normal"
                    },
                    "innerPaddingTop": 0,
                    "innerPaddingRight": 0,
                    "innerPaddingBottom": 0,
                    "innerPaddingLeft": 0
                },
                "aria:skinNormalized": true
            },
            "MultiAutoComplete": {
                "std": {
                    "frame": {
                        "frameType": "Table"
                    },
                    "states": {
                        "readOnly": {
                            "icons": {
                                "dropdown": "dropdown:multiselect_normal"
                            },
                            "label": {},
                            "frame": {
                                "sprWidth": 8,
                                "sprHeight": 12,
                                "sprIdx": 2,
                                "sprSpacing": 2,
                                "spcLeft": 4,
                                "spcTop": 6,
                                "spriteURL": "atskin/sprites/textarea.gif",
                                "spriteURLv": "atskin/sprites/textarea_v.gif",
                                "spriteURLh": "atskin/sprites/textarea_h.gif",
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "color": "#000",
                                "backgroundColor": "#FFFFFF",
                                "frameIcon": "",
                                "frameIconHPos": "left",
                                "frameIconVPos": "bottom"
                            }
                        },
                        "mandatoryErrorFocused": {
                            "icons": {
                                "dropdown": "dropdown:multiselect_error"
                            },
                            "label": {},
                            "frame": {
                                "sprWidth": 8,
                                "sprHeight": 12,
                                "sprIdx": 5,
                                "sprSpacing": 2,
                                "spcLeft": 4,
                                "spcTop": 6,
                                "spriteURL": "atskin/sprites/textarea.gif",
                                "spriteURLv": "atskin/sprites/textarea_v.gif",
                                "spriteURLh": "atskin/sprites/textarea_h.gif",
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "color": "#000",
                                "backgroundColor": "#FFFFFF",
                                "frameIcon": "",
                                "frameIconHPos": "left",
                                "frameIconVPos": "bottom"
                            }
                        },
                        "normalErrorFocused": {
                            "icons": {
                                "dropdown": "dropdown:multiselect_error"
                            },
                            "label": {},
                            "frame": {
                                "sprWidth": 8,
                                "sprHeight": 12,
                                "sprIdx": 6,
                                "sprSpacing": 2,
                                "spcLeft": 4,
                                "spcTop": 6,
                                "spriteURL": "atskin/sprites/textarea.gif",
                                "spriteURLv": "atskin/sprites/textarea_v.gif",
                                "spriteURLh": "atskin/sprites/textarea_h.gif",
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "color": "#000",
                                "backgroundColor": "#FFFFFF",
                                "frameIcon": "",
                                "frameIconHPos": "left",
                                "frameIconVPos": "bottom"
                            }
                        },
                        "normal": {
                            "icons": {
                                "dropdown": "dropdown:multiselect_normal"
                            },
                            "label": {},
                            "frame": {
                                "sprWidth": 8,
                                "sprHeight": 12,
                                "sprIdx": 0,
                                "sprSpacing": 2,
                                "spcLeft": 4,
                                "spcTop": 6,
                                "spriteURL": "atskin/sprites/textarea.gif",
                                "spriteURLv": "atskin/sprites/textarea_v.gif",
                                "spriteURLh": "atskin/sprites/textarea_h.gif",
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "color": "#000",
                                "backgroundColor": "#FFFFFF",
                                "frameIcon": "",
                                "frameIconHPos": "left",
                                "frameIconVPos": "bottom"
                            }
                        },
                        "mandatory": {
                            "icons": {
                                "dropdown": "dropdown:multiselect_normal"
                            },
                            "label": {},
                            "frame": {
                                "sprWidth": 8,
                                "sprHeight": 12,
                                "sprIdx": 3,
                                "sprSpacing": 2,
                                "spcLeft": 4,
                                "spcTop": 6,
                                "spriteURL": "atskin/sprites/textarea.gif",
                                "spriteURLv": "atskin/sprites/textarea_v.gif",
                                "spriteURLh": "atskin/sprites/textarea_h.gif",
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "color": "#000",
                                "backgroundColor": "#FFE6AB",
                                "frameIcon": "",
                                "frameIconHPos": "left",
                                "frameIconVPos": "bottom"
                            }
                        },
                        "mandatoryFocused": {
                            "icons": {
                                "dropdown": "dropdown:multiselect_focused"
                            },
                            "label": {},
                            "frame": {
                                "sprWidth": 8,
                                "sprHeight": 12,
                                "sprIdx": 4,
                                "sprSpacing": 2,
                                "spcLeft": 4,
                                "spcTop": 6,
                                "spriteURL": "atskin/sprites/textarea.gif",
                                "spriteURLv": "atskin/sprites/textarea_v.gif",
                                "spriteURLh": "atskin/sprites/textarea_h.gif",
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "color": "#000",
                                "backgroundColor": "#FFE6AB",
                                "frameIcon": "",
                                "frameIconHPos": "left",
                                "frameIconVPos": "bottom"
                            }
                        },
                        "mandatoryError": {
                            "icons": {
                                "dropdown": "dropdown:multiselect_error"
                            },
                            "label": {},
                            "frame": {
                                "sprWidth": 8,
                                "sprHeight": 12,
                                "sprIdx": 5,
                                "sprSpacing": 2,
                                "spcLeft": 4,
                                "spcTop": 6,
                                "spriteURL": "atskin/sprites/textarea.gif",
                                "spriteURLv": "atskin/sprites/textarea_v.gif",
                                "spriteURLh": "atskin/sprites/textarea_h.gif",
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "color": "#000",
                                "backgroundColor": "#FFE6AB",
                                "frameIcon": "",
                                "frameIconHPos": "left",
                                "frameIconVPos": "bottom"
                            }
                        },
                        "normalFocused": {
                            "icons": {
                                "dropdown": "dropdown:multiselect_focused"
                            },
                            "label": {},
                            "frame": {
                                "sprWidth": 8,
                                "sprHeight": 12,
                                "sprIdx": 1,
                                "sprSpacing": 2,
                                "spcLeft": 4,
                                "spcTop": 6,
                                "spriteURL": "atskin/sprites/textarea.gif",
                                "spriteURLv": "atskin/sprites/textarea_v.gif",
                                "spriteURLh": "atskin/sprites/textarea_h.gif",
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "color": "#000",
                                "backgroundColor": "#FFFFFF",
                                "frameIcon": "",
                                "frameIconHPos": "left",
                                "frameIconVPos": "bottom"
                            }
                        },
                        "normalError": {
                            "icons": {
                                "dropdown": "dropdown:multiselect_error"
                            },
                            "label": {},
                            "frame": {
                                "sprWidth": 8,
                                "sprHeight": 12,
                                "sprIdx": 6,
                                "sprSpacing": 2,
                                "spcLeft": 4,
                                "spcTop": 6,
                                "spriteURL": "atskin/sprites/textarea.gif",
                                "spriteURLv": "atskin/sprites/textarea_v.gif",
                                "spriteURLh": "atskin/sprites/textarea_h.gif",
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "color": "#000",
                                "backgroundColor": "#FFFFFF",
                                "frameIcon": "",
                                "frameIconHPos": "left",
                                "frameIconVPos": "bottom"
                            }
                        },
                        "disabled": {
                            "label": {
                                "color": "#E6D9C6"
                            },
                            "icons": {
                                "dropdown": "dropdown:multiselect_normal"
                            },
                            "frame": {
                                "sprWidth": 8,
                                "sprHeight": 12,
                                "sprIdx": 2,
                                "sprSpacing": 2,
                                "spcLeft": 4,
                                "spcTop": 6,
                                "spriteURL": "atskin/sprites/textarea.gif",
                                "spriteURLv": "atskin/sprites/textarea_v.gif",
                                "spriteURLh": "atskin/sprites/textarea_h.gif",
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "color": "#E6D9C6",
                                "backgroundColor": "#FFFFFF",
                                "frameIcon": "",
                                "frameIconHPos": "left",
                                "frameIconVPos": "bottom"
                            }
                        },
                        "prefill": {
                            "icons": {
                                "dropdown": "dropdown:multiselect_normal"
                            },
                            "label": {},
                            "frame": {
                                "sprWidth": 8,
                                "sprHeight": 12,
                                "sprIdx": 0,
                                "sprSpacing": 2,
                                "spcLeft": 4,
                                "spcTop": 6,
                                "spriteURL": "atskin/sprites/textarea.gif",
                                "spriteURLv": "atskin/sprites/textarea_v.gif",
                                "spriteURLh": "atskin/sprites/textarea_h.gif",
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "color": "#000",
                                "backgroundColor": "#FFFFFF",
                                "frameIcon": "",
                                "frameIconHPos": "left",
                                "frameIconVPos": "bottom"
                            }
                        }
                    },
                    "helpText": {
                        "italics": true,
                        "color": "gray"
                    },
                    "offsetTop": 1,
                    "optionsBackgroundColor": "#E4E4E4",
                    "optionsColor": "#333",
                    "optionsBorderWidth": 1,
                    "optionsBorderColor": "#AAAAAA",
                    "closeSpriteURL": "atskin/sprites/closemark.gif",
                    "closeSpriteHeight": 10,
                    "closeSpriteWidth": 9,
                    "optionsHighlightBackgroundColor": "#FFCC66",
                    "optionsHighlightColor": "#333",
                    "optionsHighlightBorderWidth": 1,
                    "optionsHighlightBorderColor": "#AAAAAA",
                    "closeHighlightSpriteURL": "atskin/sprites/closemark_highlight.gif",
                    "iconsRight": "dropdown",
                    "simpleHTML": false,
                    "label": {
                        "fontWeight": "normal"
                    },
                    "innerPaddingTop": 0,
                    "innerPaddingRight": 0,
                    "innerPaddingBottom": 0,
                    "innerPaddingLeft": 0
                },
                "aria:skinNormalized": true
            },
            "ErrorList": {
                "std": {
                    "divsclass": "errorlist"
                },
                "aria:skinNormalized": true
            },
            "Div": {
                "dlg": {
                    "frame": {
                        "frameType": "Table"
                    },
                    "states": {
                        "normal": {
                            "frame": {
                                "sprWidth": 36,
                                "sprHeight": 53,
                                "sprIdx": 0,
                                "sprSpacing": 2,
                                "spcLeft": 11,
                                "spcTop": 31,
                                "spriteURL": "atskin/sprites/dialog.png",
                                "spriteURLv": "atskin/sprites/dialog_v.png",
                                "spriteURLh": "atskin/sprites/dialog_h.png",
                                "marginTop": -4,
                                "marginLeft": 0,
                                "marginRight": -4,
                                "marginBottom": -5,
                                "color": "#000000",
                                "backgroundColor": "#FFF",
                                "frameIcon": "",
                                "frameIconHPos": "left",
                                "frameIconVPos": "bottom"
                            }
                        },
                        "topLeft": {
                            "frame": {
                                "sprWidth": 36,
                                "sprHeight": 53,
                                "sprIdx": 0,
                                "sprSpacing": 2,
                                "spcLeft": 11,
                                "spcTop": 31,
                                "spriteURL": "atskin/sprites/dialog.png",
                                "spriteURLv": "atskin/sprites/dialog_v.png",
                                "spriteURLh": "atskin/sprites/dialog_h.png",
                                "marginTop": -4,
                                "marginLeft": 0,
                                "marginRight": -4,
                                "marginBottom": -5,
                                "color": "#000000",
                                "backgroundColor": "#FFF",
                                "frameIcon": "",
                                "frameIconHPos": "left",
                                "frameIconVPos": "bottom"
                            }
                        },
                        "bottomRight": {
                            "frame": {
                                "sprWidth": 36,
                                "sprHeight": 53,
                                "sprIdx": 0,
                                "sprSpacing": 2,
                                "spcLeft": 11,
                                "spcTop": 31,
                                "spriteURL": "atskin/sprites/dialog.png",
                                "spriteURLv": "atskin/sprites/dialog_v.png",
                                "spriteURLh": "atskin/sprites/dialog_h.png",
                                "marginTop": -4,
                                "marginLeft": 0,
                                "marginRight": -4,
                                "marginBottom": -5,
                                "color": "#000000",
                                "backgroundColor": "#FFF",
                                "frameIcon": "",
                                "frameIconHPos": "left",
                                "frameIconVPos": "bottom"
                            }
                        },
                        "bottomLeft": {
                            "frame": {
                                "sprWidth": 36,
                                "sprHeight": 53,
                                "sprIdx": 0,
                                "sprSpacing": 2,
                                "spcLeft": 11,
                                "spcTop": 31,
                                "spriteURL": "atskin/sprites/dialog.png",
                                "spriteURLv": "atskin/sprites/dialog_v.png",
                                "spriteURLh": "atskin/sprites/dialog_h.png",
                                "marginTop": -4,
                                "marginLeft": 0,
                                "marginRight": -4,
                                "marginBottom": -5,
                                "color": "#000000",
                                "backgroundColor": "#FFF",
                                "frameIcon": "",
                                "frameIconHPos": "left",
                                "frameIconVPos": "bottom"
                            }
                        }
                    }
                },
                "errorlist": {
                    "frame": {
                        "frameType": "Simple"
                    },
                    "states": {
                        "normal": {
                            "frame": {
                                "paddingTop": 10,
                                "paddingRight": 15,
                                "paddingBottom": 10,
                                "paddingLeft": 15,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderSize": 0,
                                "borderColor": "",
                                "borderTopLeftRadius": 0,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 0,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#F2ECDE",
                                "color": "#000000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal"
                            }
                        },
                        "topLeft": {
                            "frame": {
                                "paddingTop": 10,
                                "paddingRight": 15,
                                "paddingBottom": 10,
                                "paddingLeft": 15,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderSize": 0,
                                "borderColor": "",
                                "borderTopLeftRadius": 0,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 0,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#F2ECDE",
                                "color": "#000000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal"
                            }
                        },
                        "bottomRight": {
                            "frame": {
                                "paddingTop": 10,
                                "paddingRight": 15,
                                "paddingBottom": 10,
                                "paddingLeft": 15,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderSize": 0,
                                "borderColor": "",
                                "borderTopLeftRadius": 0,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 0,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#F2ECDE",
                                "color": "#000000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal"
                            }
                        },
                        "bottomLeft": {
                            "frame": {
                                "paddingTop": 10,
                                "paddingRight": 15,
                                "paddingBottom": 10,
                                "paddingLeft": 15,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderSize": 0,
                                "borderColor": "",
                                "borderTopLeftRadius": 0,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 0,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#F2ECDE",
                                "color": "#000000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal"
                            }
                        }
                    }
                },
                "basic": {
                    "frame": {
                        "frameType": "Simple"
                    },
                    "states": {
                        "normal": {
                            "frame": {
                                "paddingTop": 10,
                                "paddingRight": 10,
                                "paddingBottom": 10,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderSize": 1,
                                "borderColor": "#000",
                                "borderTopLeftRadius": 0,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 0,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#EBE1CF",
                                "color": "#000000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal"
                            }
                        },
                        "topLeft": {
                            "frame": {
                                "paddingTop": 10,
                                "paddingRight": 10,
                                "paddingBottom": 10,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderSize": 1,
                                "borderColor": "#000",
                                "borderTopLeftRadius": 0,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 0,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#EBE1CF",
                                "color": "#000000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal"
                            }
                        },
                        "bottomRight": {
                            "frame": {
                                "paddingTop": 10,
                                "paddingRight": 10,
                                "paddingBottom": 10,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderSize": 1,
                                "borderColor": "#000",
                                "borderTopLeftRadius": 0,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 0,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#EBE1CF",
                                "color": "#000000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal"
                            }
                        },
                        "bottomLeft": {
                            "frame": {
                                "paddingTop": 10,
                                "paddingRight": 10,
                                "paddingBottom": 10,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderSize": 1,
                                "borderColor": "#000",
                                "borderTopLeftRadius": 0,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 0,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#EBE1CF",
                                "color": "#000000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal"
                            }
                        }
                    }
                },
                "std": {
                    "frame": {
                        "frameType": "Simple"
                    },
                    "states": {
                        "normal": {
                            "frame": {
                                "paddingTop": 0,
                                "paddingRight": 0,
                                "paddingBottom": 0,
                                "paddingLeft": 0,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "",
                                "borderSize": 0,
                                "borderColor": "",
                                "borderTopLeftRadius": 0,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 0,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#FFF",
                                "color": "#000000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal"
                            }
                        },
                        "topLeft": {
                            "frame": {
                                "paddingTop": 0,
                                "paddingRight": 0,
                                "paddingBottom": 0,
                                "paddingLeft": 0,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "",
                                "borderSize": 0,
                                "borderColor": "",
                                "borderTopLeftRadius": 0,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 0,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#FFF",
                                "color": "#000000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal"
                            }
                        },
                        "bottomRight": {
                            "frame": {
                                "paddingTop": 0,
                                "paddingRight": 0,
                                "paddingBottom": 0,
                                "paddingLeft": 0,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "",
                                "borderSize": 0,
                                "borderColor": "",
                                "borderTopLeftRadius": 0,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 0,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#FFF",
                                "color": "#000000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal"
                            }
                        },
                        "bottomLeft": {
                            "frame": {
                                "paddingTop": 0,
                                "paddingRight": 0,
                                "paddingBottom": 0,
                                "paddingLeft": 0,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "",
                                "borderSize": 0,
                                "borderColor": "",
                                "borderTopLeftRadius": 0,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 0,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#FFF",
                                "color": "#000000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal"
                            }
                        }
                    }
                },
                "errortip": {
                    "frame": {
                        "frameType": "Table"
                    },
                    "states": {
                        "bottomLeft": {
                            "frame": {
                                "sprWidth": 32,
                                "sprHeight": 60,
                                "sprIdx": 0,
                                "sprSpacing": 2,
                                "spcLeft": 16,
                                "spcTop": 30,
                                "spriteURL": "atskin/sprites/errtip2.png",
                                "spriteURLv": "atskin/sprites/errtip_v2.png",
                                "spriteURLh": "atskin/sprites/errtip_h2.png",
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 6,
                                "marginBottom": 0,
                                "color": "#000000",
                                "backgroundColor": "#FFC759",
                                "frameHeight": 30,
                                "frameIcon": "atskin/sprites/frameIconErrortipTopRight.png",
                                "frameIconHPos": "right",
                                "frameIconVPos": "top"
                            }
                        },
                        "topLeft": {
                            "frame": {
                                "sprWidth": 32,
                                "sprHeight": 60,
                                "sprIdx": 0,
                                "sprSpacing": 2,
                                "spcLeft": 16,
                                "spcTop": 30,
                                "spriteURL": "atskin/sprites/errtip2.png",
                                "spriteURLv": "atskin/sprites/errtip_v2.png",
                                "spriteURLh": "atskin/sprites/errtip_h2.png",
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 6,
                                "marginBottom": 0,
                                "color": "#000000",
                                "backgroundColor": "#FFC759",
                                "frameHeight": 30,
                                "frameIcon": "atskin/sprites/frameIconErrortipBottomRight.png",
                                "frameIconHPos": "right",
                                "frameIconVPos": "bottom"
                            }
                        },
                        "bottomRight": {
                            "frame": {
                                "sprWidth": 32,
                                "sprHeight": 60,
                                "sprIdx": 0,
                                "sprSpacing": 2,
                                "spcLeft": 16,
                                "spcTop": 30,
                                "spriteURL": "atskin/sprites/errtip2.png",
                                "spriteURLv": "atskin/sprites/errtip_v2.png",
                                "spriteURLh": "atskin/sprites/errtip_h2.png",
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 6,
                                "marginBottom": 0,
                                "color": "#000000",
                                "backgroundColor": "#FFC759",
                                "frameHeight": 30,
                                "frameIcon": "atskin/sprites/frameIconErrortipTopLeft.png",
                                "frameIconHPos": "left",
                                "frameIconVPos": "top"
                            }
                        },
                        "normal": {
                            "frame": {
                                "sprWidth": 32,
                                "sprHeight": 60,
                                "sprIdx": 0,
                                "sprSpacing": 2,
                                "spcLeft": 16,
                                "spcTop": 30,
                                "spriteURL": "atskin/sprites/errtip2.png",
                                "spriteURLv": "atskin/sprites/errtip_v2.png",
                                "spriteURLh": "atskin/sprites/errtip_h2.png",
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 6,
                                "marginBottom": 0,
                                "color": "#000000",
                                "backgroundColor": "#FFC759",
                                "frameHeight": 30,
                                "frameIcon": "atskin/sprites/frameIconErrortip2.png",
                                "frameIconHPos": "left",
                                "frameIconVPos": "bottom"
                            }
                        }
                    }
                },
                "list": {
                    "frame": {
                        "frameType": "Table"
                    },
                    "states": {
                        "normal": {
                            "frame": {
                                "sprWidth": 8,
                                "sprHeight": 12,
                                "sprIdx": 0,
                                "sprSpacing": 2,
                                "spcLeft": 4,
                                "spcTop": 6,
                                "spriteURL": "atskin/sprites/list.png",
                                "spriteURLv": "atskin/sprites/list_v.png",
                                "spriteURLh": "atskin/sprites/list_h.png",
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "color": "#000000",
                                "backgroundColor": "#FFF",
                                "frameIcon": "",
                                "frameIconHPos": "left",
                                "frameIconVPos": "bottom"
                            }
                        },
                        "topLeft": {
                            "frame": {
                                "sprWidth": 8,
                                "sprHeight": 12,
                                "sprIdx": 0,
                                "sprSpacing": 2,
                                "spcLeft": 4,
                                "spcTop": 6,
                                "spriteURL": "atskin/sprites/list.png",
                                "spriteURLv": "atskin/sprites/list_v.png",
                                "spriteURLh": "atskin/sprites/list_h.png",
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "color": "#000000",
                                "backgroundColor": "#FFF",
                                "frameIcon": "",
                                "frameIconHPos": "left",
                                "frameIconVPos": "bottom"
                            }
                        },
                        "bottomRight": {
                            "frame": {
                                "sprWidth": 8,
                                "sprHeight": 12,
                                "sprIdx": 0,
                                "sprSpacing": 2,
                                "spcLeft": 4,
                                "spcTop": 6,
                                "spriteURL": "atskin/sprites/list.png",
                                "spriteURLv": "atskin/sprites/list_v.png",
                                "spriteURLh": "atskin/sprites/list_h.png",
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "color": "#000000",
                                "backgroundColor": "#FFF",
                                "frameIcon": "",
                                "frameIconHPos": "left",
                                "frameIconVPos": "bottom"
                            }
                        },
                        "bottomLeft": {
                            "frame": {
                                "sprWidth": 8,
                                "sprHeight": 12,
                                "sprIdx": 0,
                                "sprSpacing": 2,
                                "spcLeft": 4,
                                "spcTop": 6,
                                "spriteURL": "atskin/sprites/list.png",
                                "spriteURLv": "atskin/sprites/list_v.png",
                                "spriteURLh": "atskin/sprites/list_h.png",
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "color": "#000000",
                                "backgroundColor": "#FFF",
                                "frameIcon": "",
                                "frameIconHPos": "left",
                                "frameIconVPos": "bottom"
                            }
                        }
                    }
                },
                "dropdown": {
                    "frame": {
                        "frameType": "Table"
                    },
                    "states": {
                        "normal": {
                            "frame": {
                                "sprWidth": 20,
                                "sprHeight": 20,
                                "sprIdx": 0,
                                "sprSpacing": 2,
                                "spcLeft": 7,
                                "spcTop": 7,
                                "spriteURL": "atskin/sprites/dropdown.png",
                                "spriteURLv": "atskin/sprites/dropdown_v.png",
                                "spriteURLh": "atskin/sprites/dropdown_h.png",
                                "marginTop": -3,
                                "marginLeft": -3,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "color": "#000000",
                                "backgroundColor": "#FFF",
                                "frameIcon": "",
                                "frameIconHPos": "left",
                                "frameIconVPos": "bottom"
                            }
                        },
                        "topLeft": {
                            "frame": {
                                "sprWidth": 20,
                                "sprHeight": 20,
                                "sprIdx": 0,
                                "sprSpacing": 2,
                                "spcLeft": 7,
                                "spcTop": 7,
                                "spriteURL": "atskin/sprites/dropdown.png",
                                "spriteURLv": "atskin/sprites/dropdown_v.png",
                                "spriteURLh": "atskin/sprites/dropdown_h.png",
                                "marginTop": -3,
                                "marginLeft": -3,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "color": "#000000",
                                "backgroundColor": "#FFF",
                                "frameIcon": "",
                                "frameIconHPos": "left",
                                "frameIconVPos": "bottom"
                            }
                        },
                        "bottomRight": {
                            "frame": {
                                "sprWidth": 20,
                                "sprHeight": 20,
                                "sprIdx": 0,
                                "sprSpacing": 2,
                                "spcLeft": 7,
                                "spcTop": 7,
                                "spriteURL": "atskin/sprites/dropdown.png",
                                "spriteURLv": "atskin/sprites/dropdown_v.png",
                                "spriteURLh": "atskin/sprites/dropdown_h.png",
                                "marginTop": -3,
                                "marginLeft": -3,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "color": "#000000",
                                "backgroundColor": "#FFF",
                                "frameIcon": "",
                                "frameIconHPos": "left",
                                "frameIconVPos": "bottom"
                            }
                        },
                        "bottomLeft": {
                            "frame": {
                                "sprWidth": 20,
                                "sprHeight": 20,
                                "sprIdx": 0,
                                "sprSpacing": 2,
                                "spcLeft": 7,
                                "spcTop": 7,
                                "spriteURL": "atskin/sprites/dropdown.png",
                                "spriteURLv": "atskin/sprites/dropdown_v.png",
                                "spriteURLh": "atskin/sprites/dropdown_h.png",
                                "marginTop": -3,
                                "marginLeft": -3,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "color": "#000000",
                                "backgroundColor": "#FFF",
                                "frameIcon": "",
                                "frameIconHPos": "left",
                                "frameIconVPos": "bottom"
                            }
                        }
                    }
                },
                "tooltip": {
                    "frame": {
                        "frameType": "Table"
                    },
                    "states": {
                        "normal": {
                            "frame": {
                                "sprWidth": 20,
                                "sprHeight": 18,
                                "sprIdx": 0,
                                "sprSpacing": 2,
                                "spcLeft": 9,
                                "spcTop": 8,
                                "spriteURL": "atskin/sprites/tooltip.png",
                                "spriteURLv": "atskin/sprites/tooltip_v.png",
                                "spriteURLh": "atskin/sprites/tooltip_h.png",
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "color": "#000000",
                                "backgroundColor": "#F2ECE1",
                                "frameIcon": "",
                                "frameIconHPos": "left",
                                "frameIconVPos": "bottom"
                            }
                        },
                        "topLeft": {
                            "frame": {
                                "sprWidth": 20,
                                "sprHeight": 18,
                                "sprIdx": 0,
                                "sprSpacing": 2,
                                "spcLeft": 9,
                                "spcTop": 8,
                                "spriteURL": "atskin/sprites/tooltip.png",
                                "spriteURLv": "atskin/sprites/tooltip_v.png",
                                "spriteURLh": "atskin/sprites/tooltip_h.png",
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "color": "#000000",
                                "backgroundColor": "#F2ECE1",
                                "frameIcon": "",
                                "frameIconHPos": "left",
                                "frameIconVPos": "bottom"
                            }
                        },
                        "bottomRight": {
                            "frame": {
                                "sprWidth": 20,
                                "sprHeight": 18,
                                "sprIdx": 0,
                                "sprSpacing": 2,
                                "spcLeft": 9,
                                "spcTop": 8,
                                "spriteURL": "atskin/sprites/tooltip.png",
                                "spriteURLv": "atskin/sprites/tooltip_v.png",
                                "spriteURLh": "atskin/sprites/tooltip_h.png",
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "color": "#000000",
                                "backgroundColor": "#F2ECE1",
                                "frameIcon": "",
                                "frameIconHPos": "left",
                                "frameIconVPos": "bottom"
                            }
                        },
                        "bottomLeft": {
                            "frame": {
                                "sprWidth": 20,
                                "sprHeight": 18,
                                "sprIdx": 0,
                                "sprSpacing": 2,
                                "spcLeft": 9,
                                "spcTop": 8,
                                "spriteURL": "atskin/sprites/tooltip.png",
                                "spriteURLv": "atskin/sprites/tooltip_v.png",
                                "spriteURLh": "atskin/sprites/tooltip_h.png",
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "color": "#000000",
                                "backgroundColor": "#F2ECE1",
                                "frameIcon": "",
                                "frameIconHPos": "left",
                                "frameIconVPos": "bottom"
                            }
                        }
                    }
                },
                "aria:skinNormalized": true
            },
            "aria:skinNormalized": true
        }
    }
});