define("UsrRealty_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "GeneralInfoTabContainer",
				"values": {
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrRealty"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "0a206209-11ec-479a-a59e-179f028dc59e",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "Title",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrTitle",
					"control": "$UsrTitle",
					"labelPosition": "auto"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PriceUSD",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPrice_heiyxc8",
					"labelPosition": "auto",
					"control": "$PDS_UsrPrice_heiyxc8"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "NumberInput_mfkbuzq",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrOfferTypeUsrCommissionPercent_7n334hb",
					"control": "$PDS_UsrOfferTypeUsrCommissionPercent_7n334hb",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "CommissionUSD",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrCommissionUSD_mqcqsdb",
					"labelPosition": "auto",
					"control": "$PDS_UsrCommissionUSD_mqcqsdb",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Type",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrType_58ox0eb",
					"labelPosition": "auto",
					"control": "$PDS_UsrType_58ox0eb",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_9oqk10j",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_9oqk10j_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Type",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OfferType",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrOfferType_pehq5i1",
					"labelPosition": "auto",
					"control": "$PDS_UsrOfferType_pehq5i1",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_oxm7qid",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_oxm7qid_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "OfferType",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Area",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrArea_45qqwc0",
					"labelPosition": "auto",
					"control": "$PDS_UsrArea_45qqwc0"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Comment",
				"values": {
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_UsrComment_0tq3b1s",
					"labelPosition": "left",
					"control": "$PDS_UsrComment_0tq3b1s",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_ncaw5hn",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_ncaw5hn_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "#000000",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_ze6cc00",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_ncaw5hn",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_jaa7j83",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_ze6cc00",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_i2yutpa",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_i2yutpa_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrRealtyVisit",
							"defaultValues": [
								{
									"attributeName": "UsrParentRealty",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_jaa7j83",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_mrwwmvj",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_mrwwmvj_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload",
								"useLastLoadParameters": true
							},
							"dataSourceName": "GridDetail_xzl785aDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_jaa7j83",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_0nmfbms",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_0nmfbms_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_jaa7j83",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_vwo5f10",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_vwo5f10_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "RealtyVisits"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_0nmfbms",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_7ut2gah",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_7ut2gah_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrRealtyVisit"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_0nmfbms",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_12aoaw0",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_12aoaw0_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_12aoaw0_GridDetail_xzl785a",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_xzl785a"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_12aoaw0_SearchValue",
							"GridDetailSearchFilter_12aoaw0_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_jaa7j83",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_2ecq311",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_ncaw5hn",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RealtyVisits",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$GridDetail_xzl785a",
					"primaryColumnName": "GridDetail_xzl785aDS_Id",
					"columns": [
						{
							"id": "35832cb7-c2dd-dde7-b160-3a66e0e3ce71",
							"code": "GridDetail_xzl785aDS_UsrVisitDateTime",
							"caption": "#ResourceString(GridDetail_xzl785aDS_UsrVisitDateTime)#",
							"dataValueType": 7
						},
						{
							"id": "cbdabfa8-9981-ee13-3189-7d4a63705d2f",
							"code": "GridDetail_xzl785aDS_UsrPotentialCustomer",
							"caption": "#ResourceString(GridDetail_xzl785aDS_UsrPotentialCustomer)#",
							"dataValueType": 10
						},
						{
							"id": "a7fc820f-5129-199a-45db-a4f63d65493d",
							"code": "GridDetail_xzl785aDS_UsrOwner",
							"caption": "#ResourceString(GridDetail_xzl785aDS_UsrOwner)#",
							"dataValueType": 10
						},
						{
							"id": "2ddcfe52-2736-e7b3-4e3b-bf8f05e2866f",
							"code": "GridDetail_xzl785aDS_UsrComment",
							"caption": "#ResourceString(GridDetail_xzl785aDS_UsrComment)#",
							"dataValueType": 28
						}
					],
					"placeholder": false,
					"activeRow": "$GridDetail_xzl785a_ActiveRow",
					"selectionState": "$GridDetail_xzl785a_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_xzl785a_SelectionState"
					},
					"bulkActions": []
				},
				"parentName": "GridContainer_2ecq311",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_xzl785a_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_xzl785aDS",
							"filters": "$GridDetail_xzl785a | crt.ToCollectionFilters : 'GridDetail_xzl785a' : $GridDetail_xzl785a_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_xzl785a_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "RealtyVisits",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_xzl785a_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_xzl785aDS",
							"filters": "$GridDetail_xzl785a | crt.ToCollectionFilters : 'GridDetail_xzl785a' : $GridDetail_xzl785a_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_xzl785a_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_xzl785a_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_xzl785a_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "RealtyVisits",
							"filters": "$GridDetail_xzl785a | crt.ToCollectionFilters : 'GridDetail_xzl785a' : $GridDetail_xzl785a_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_xzl785a_SelectionState"
						}
					}
				},
				"parentName": "RealtyVisits",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_xzl785a_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_xzl785aDS",
							"filters": "$GridDetail_xzl785a | crt.ToCollectionFilters : 'GridDetail_xzl785a' : $GridDetail_xzl785a_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_xzl785a_SelectionState"
						}
					}
				},
				"parentName": "RealtyVisits",
				"propertyName": "bulkActions",
				"index": 2
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrTitle": {
						"modelConfig": {
							"path": "PDS.UsrTitle"
						}
					},
					"PDS_UsrPrice_heiyxc8": {
						"modelConfig": {
							"path": "PDS.UsrPrice"
						},
						"validators": {
							"GreaterThanZero": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 0,
									"message": "#ResourceString(PriceCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrType_58ox0eb": {
						"modelConfig": {
							"path": "PDS.UsrType"
						}
					},
					"PDS_UsrOfferType_pehq5i1": {
						"modelConfig": {
							"path": "PDS.UsrOfferType"
						}
					},
					"PDS_UsrArea_45qqwc0": {
						"modelConfig": {
							"path": "PDS.UsrArea"
						},
						"validators": {
							"GreaterThanZero": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 0,
									"message": "#ResourceString(AreaCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrComment_0tq3b1s": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						},
						"validators": {
							"required": {
								"type": "crt.Required"
							}
						}
					},
					"GridDetail_xzl785a": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_xzl785aDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_12aoaw0_GridDetail_xzl785a",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_xzl785aDS_UsrVisitDateTime": {
									"modelConfig": {
										"path": "GridDetail_xzl785aDS.UsrVisitDateTime"
									}
								},
								"GridDetail_xzl785aDS_UsrPotentialCustomer": {
									"modelConfig": {
										"path": "GridDetail_xzl785aDS.UsrPotentialCustomer"
									}
								},
								"GridDetail_xzl785aDS_UsrOwner": {
									"modelConfig": {
										"path": "GridDetail_xzl785aDS.UsrOwner"
									}
								},
								"GridDetail_xzl785aDS_UsrComment": {
									"modelConfig": {
										"path": "GridDetail_xzl785aDS.UsrComment"
									}
								},
								"GridDetail_xzl785aDS_Id": {
									"modelConfig": {
										"path": "GridDetail_xzl785aDS.Id"
									}
								}
							}
						}
					},
					"PDS_UsrCommissionUSD_mqcqsdb": {
						"modelConfig": {
							"path": "PDS.UsrCommissionUSD"
						}
					},
					"PDS_UsrOfferTypeUsrCommissionPercent_7n334hb": {
						"modelConfig": {
							"path": "PDS.UsrOfferTypeUsrCommissionPercent_7n334hb"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_xzl785aDS": [
							{
								"attributePath": "UsrParentRealty",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrRealty",
							"attributes": {
								"UsrOfferTypeUsrCommissionPercent_7n334hb": {
									"path": "UsrOfferType.UsrCommissionPercent",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_xzl785aDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrRealtyVisit",
							"attributes": {
								"UsrVisitDateTime": {
									"path": "UsrVisitDateTime"
								},
								"UsrPotentialCustomer": {
									"path": "UsrPotentialCustomer"
								},
								"UsrOwner": {
									"path": "UsrOwner"
								},
								"UsrComment": {
									"path": "UsrComment"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			 {
		        request: "crt.HandleViewModelAttributeChangeRequest",
		        /* The custom implementation of the system request handler. */
		        handler: async (request, next) => {
					/* Check the price. */
		            if (request.attributeName === 'PDS_UsrPrice_heiyxc8') {
						// console.log("I'm the price!");
						var price = await request.$context.PDS_UsrPrice_heiyxc8;
						var MinPriceToRequireRealtyComment = Terrasoft.SysSettings.cachedSettings.MinPriceToRequireRealtyComment;
						 /* Check the request description. */
		                if (price>MinPriceToRequireRealtyComment) {
		                    /* If PriceUSD>MinPriceToRequireRealtyComment apply the validator to the "UsrDescription" attribute. */
		                    request.$context.enableAttributeValidator('PDS_UsrComment_0tq3b1s', 'required');
		                } else {
		                    /* Otherwhise do not apply the validator to the "UsrDescription" attribute. */
		                    request.$context.disableAttributeValidator('PDS_UsrComment_0tq3b1s', 'required');
		                }
		            }
		            /* Call the next handler if it exists and return its result. */
		            return next?.handle(request);
		        }
		    },
			{
				request: "crt.HandleViewModelAttributeChangeRequest",
				/* The custom implementation of the system query handler. */
				handler: async (request, next) => {
      					
				if (request.attributeName === 'PDS_UsrPrice_heiyxc8' || 				             
				request.attributeName === 'PDS_UsrOfferTypeUsrCommissionPercent_7n334hb' ) 
					{ 		
						var price = await request.$context.PDS_UsrPrice_heiyxc8;
						var percent = await request.$context.PDS_UsrOfferTypeUsrCommissionPercent_7n334hb;
						var commission = price * percent / 100;
						request.$context.PDS_UsrCommissionUSD_mqcqsdb = commission;
					}
				/* Call the next handler if it exists and return its result. */
				return next?.handle(request);
				}
	   }
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
			/* The validator type must contain a vendor prefix.
			Format the validator type in PascalCase. */
			"usr.DGValidator": {
				validator: function (config) {
					return function (control) {
						let value = control.value;
						let minValue = config.minValue;
						let valueIsCorrect = value >= minValue;
						var result;
						if (valueIsCorrect) {
							result = null;
						} else {
							result = {
								"usr.DGValidator": { 
									message: config.message
								}
							};
						}
						return result;
					};
				},
				params: [
					{
						name: "minValue"
					},
					{
						name: "message"
					}
				],
				async: false
			}
		}/**SCHEMA_VALIDATORS*/
	};
});