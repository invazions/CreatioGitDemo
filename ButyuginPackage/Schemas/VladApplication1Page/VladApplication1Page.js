define("VladApplication1Page", [], function() {
	return {
		entitySchemaName: "VladApplication",
		attributes: {
			"VladApplicationService": {  
                "dataValueType": Terrasoft.DataValueType.LOOKUP,  
                "lookupListConfig": {  
                    "filters": [  
                        function() {  
       						var IdCategoryService = this.get("VladLookup1");  
                            var filterGroup = Ext.create("Terrasoft.FilterGroup");  
       						if (IdCategoryService){  
                            filterGroup.add("IsActiveService",  
                                Terrasoft.createColumnFilterWithParameter(  
                                    Terrasoft.ComparisonType.EQUAL,  
                                    "[VladService:Id].VladServiceType",  
                                    IdCategoryService.value)); //Value - чтобы достать ID  
                            return filterGroup;}  
         
       						return filterGroup;  
                        }  
                    ]  
                }  
            }
			
		},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "VladApplicationFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "VladApplication"
				}
			},
			"VladApplicationTicketTabDetail": {
				"schemaName": "VladSchema0d50fad9Detail",
				"entitySchemaName": "VladApplicationTicket",
				"filter": {
					"detailColumn": "VladApplicationTicketApplication",
					"masterColumn": "Id"
				}
			},
			"VisaDetailV246433fcc": {
				"schemaName": "VisaDetailV2",
				"entitySchemaName": "VladApplicationVisa",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "VladApplication"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{
			"VladApplicationResponsible": {
				"7b806c6e-8a39-42ee-aeb6-d368bd640ec5": {
					"uId": "7b806c6e-8a39-42ee-aeb6-d368bd640ec5",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "VladApplicationStatus"
							},
							"rightExpression": {
								"type": 0,
								"value": "931afe98-26d0-4520-9e25-895da856c8a0",
								"dataValueType": 10
							}
						}
					]
				},
				"a22d8e99-a228-4fd4-b5d2-1380eb147f31": {
					"uId": "a22d8e99-a228-4fd4-b5d2-1380eb147f31",
					"enabled": true,
					"removed": false,
					"ruleType": 1,
					"baseAttributePatch": "Type",
					"comparisonType": 3,
					"autoClean": false,
					"autocomplete": false,
					"type": 0,
					"value": "60733efc-f36b-1410-a883-16d83cab0980",
					"dataValueType": 10
				}
			},
			"VladApplicationComment": {
				"6bde2343-c57a-43d5-8ec7-3c534ba70ef7": {
					"uId": "6bde2343-c57a-43d5-8ec7-3c534ba70ef7",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "VladApplicationService"
							}
						}
					]
				}
			},
			"VladApplicationService": {
				"d3aef81b-0516-45fa-b566-2712328350c0": {
					"uId": "d3aef81b-0516-45fa-b566-2712328350c0",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 4,
							"leftExpression": {
								"type": 1,
								"attribute": "VladApplicationStatus"
							},
							"rightExpression": {
								"type": 0,
								"value": "c5441139-d875-4f47-8b02-df6158200a81",
								"dataValueType": 10
							}
						}
					]
				},
				"b9debb5c-54cf-4428-9157-fd8f064b2e86": {
					"uId": "b9debb5c-54cf-4428-9157-fd8f064b2e86",
					"enabled": true,
					"removed": false,
					"ruleType": 1,
					"baseAttributePatch": "VladServiceStatus",
					"comparisonType": 3,
					"autoClean": false,
					"autocomplete": false,
					"type": 0,
					"value": "4ca28a36-e5d2-409f-9802-15c73f1d20ee",
					"dataValueType": 10
				}
			},
			"VladApplicationStartDate": {
				"39e36894-5fba-4c9d-ba63-bec281c6ddfa": {
					"uId": "39e36894-5fba-4c9d-ba63-bec281c6ddfa",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 6,
							"formula": {
								"type": 2,
								"dataType": 7,
								"code": "GETDATE",
								"arguments": []
							}
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "VladApplicationStatus"
							},
							"rightExpression": {
								"type": 0,
								"value": "e505cd61-7267-4eb8-889c-c3f83b256258",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"VladApplicationNumber": {
				"5e9b0667-76f5-4df5-a176-268620bd3dd2": {
					"uId": "5e9b0667-76f5-4df5-a176-268620bd3dd2",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "VladName"
							}
						}
					]
				},
				"488f4538-6f41-451e-97d8-919e0296b590": {
					"uId": "488f4538-6f41-451e-97d8-919e0296b590",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "VladName"
							}
						}
					]
				}
			}
		}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "VladApplicationNumberaed19486-6f27-421c-86ea-d684bde9996e",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "VladApplicationNumber",
					"enabled": false
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "VladName38b7e8c7-985a-469c-afef-26be45bfcad4",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "VladName",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "CreatedBy51dc90f5-dcc5-4a19-824c-dce55b4683e4",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "CreatedBy",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "LOOKUP07334dff-f530-4d13-94df-d4e6dfdd65e4",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "VladApplicationResponsible",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "LOOKUPd59f2d3b-cf71-46ee-af9d-a69b23785c9f",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "VladApplicationInitiator",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "LOOKUPe7424a40-6da1-4dbb-8ce5-e95bc4d35589",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "VladApplicationStatus",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "STRING235442ab-a415-41a0-aaa3-3a982b99f3c8",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 6,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "VladApplicationComment",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "LOOKUP617382d6-d1d9-40b0-b41d-03bc508c689c",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 7,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "VladApplicationService",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "CreatedOn02fea898-c145-4c04-8840-2f8491435ab2",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 8,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "CreatedOn",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "DATETIME63e983cc-e053-4e9e-a642-0add8c207824",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 9,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "VladApplicationStartDate",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "INTEGER81b3f446-7c35-4c25-a0dd-bf7f79444a8d",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 10,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "VladApplicationTotalAmount",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "INTEGER0f232cc9-6dfd-457b-a1d7-8f61a91d55aa",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 11,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "VladApplicationMostExpensive",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 11
			},
			{
				"operation": "insert",
				"name": "INTEGERac8a14a2-1412-4862-8687-8786e20c23cb",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 12,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "VladApplicationAverageCost",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 12
			},
			{
				"operation": "insert",
				"name": "LOOKUP39f8c9e9-ebcc-4a0b-83d5-888213b13a9d",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 13,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "VladLookup1",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 13
			},
			{
				"operation": "insert",
				"name": "VladApplicationTicketTab",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.VladApplicationTicketTabTabCaption"
					},
					"items": [],
					"order": 0
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "VladApplicationTicketTabDetail",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "VladApplicationTicketTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NotesAndFilesTab",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.NotesAndFilesTabCaption"
					},
					"items": [],
					"order": 1
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Files",
				"values": {
					"itemType": 2
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NotesControlGroup",
				"values": {
					"itemType": 15,
					"caption": {
						"bindTo": "Resources.Strings.NotesGroupCaption"
					},
					"items": []
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Notes",
				"values": {
					"bindTo": "VladNotes",
					"dataValueType": 1,
					"contentType": 4,
					"layout": {
						"column": 0,
						"row": 0,
						"colSpan": 24
					},
					"labelConfig": {
						"visible": false
					},
					"controlConfig": {
						"imageLoaded": {
							"bindTo": "insertImagesToNotes"
						},
						"images": {
							"bindTo": "NotesImagesCollection"
						}
					}
				},
				"parentName": "NotesControlGroup",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "ESNTab",
				"values": {
					"order": 2
				}
			},
			{
				"operation": "insert",
				"name": "Tab3ba8f52cTabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.TabVisaCaption"
					},
					"items": [],
					"order": 3
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "VisaDetailV246433fcc",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tab3ba8f52cTabLabel",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_DIFF*/
	};
});
