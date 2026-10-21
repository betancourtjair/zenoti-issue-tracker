// Zenoti Issue Tracker data file. Keep it next to index.html; replace it after "Save data file".
window.ZENOTI_DATA = {
  "meta": {
    "name": "Zenoti Issue Tracker",
    "schema": 1,
    "exportedAt": "2026-10-21T12:00:00.000Z",
    "note": "Data file for index.html. Replace this file in the repository after \"Save data file\"."
  },
  "config": {
    "priorities": [
      {
        "rank": 1,
        "name": "Prioritary",
        "definition": "Critical business continuity, material financial/security exposure, or imminent hard deadline.",
        "entry": "System/payment outage; active security/fraud; material revenue impact; legal/compliance exposure; deadline <=3 days.",
        "ack": "<=1 business hour",
        "plan": "<=4 business hours",
        "cadence": "Every 2 hours",
        "owner": "Zenoti Support Lead + Product/Engineering leadership",
        "cadenceRule": {
          "unit": "calendar",
          "maxDays": 0
        },
        "color": "#C00000"
      },
      {
        "rank": 2,
        "name": "Urgent",
        "definition": "Severe degradation requiring accelerated resolution.",
        "entry": "Major financial impact; multi-location disruption; deadline 4-7 days; high-volume member impact.",
        "ack": "<=4 business hours",
        "plan": "<=1 business day",
        "cadence": "Daily",
        "owner": "Support Manager + Product owner",
        "cadenceRule": {
          "unit": "business",
          "maxDays": 1
        },
        "color": "#ED7D31"
      },
      {
        "rank": 3,
        "name": "Important",
        "definition": "Meaningful operational impact with workaround or contained scope.",
        "entry": "Repeated defect; one/more locations affected; recurring manual work; no response >24h.",
        "ack": "<=1 business day",
        "plan": "<=2 business days",
        "cadence": "Every 2 business days",
        "owner": "Assigned agent + Support Manager",
        "cadenceRule": {
          "unit": "business",
          "maxDays": 2
        },
        "color": "#FFD966"
      },
      {
        "rank": 4,
        "name": "Relevant",
        "definition": "Limited impact, correction, report defect, or inquiry needing planned follow-up.",
        "entry": "Low-volume issue; non-blocking report/data defect; inquiry; contained correction.",
        "ack": "<=2 business days",
        "plan": "<=5 business days",
        "cadence": "Weekly",
        "owner": "Assigned agent",
        "cadenceRule": {
          "unit": "calendar",
          "maxDays": 7
        },
        "color": "#5B9BD5"
      },
      {
        "rank": 5,
        "name": "Preferable",
        "definition": "Enhancement or optimization without current service impact.",
        "entry": "Feature request; convenience improvement; cosmetic change; no deadline.",
        "ack": "<=3 business days",
        "plan": "Backlog / roadmap decision",
        "cadence": "Biweekly or milestone",
        "owner": "Customer Success / Product",
        "cadenceRule": {
          "unit": "calendar",
          "maxDays": 14
        },
        "color": "#A5A5A5"
      }
    ],
    "statuses": [
      "Open",
      "Open/unknown",
      "Open at time reported",
      "Active investigation",
      "Recurring",
      "Closure not confirmed",
      "Unresolved as of Oct 2026",
      "Resolved"
    ],
    "closedStatuses": [
      "Resolved"
    ],
    "requestTypes": [
      "INCIDENT",
      "CORRECTION",
      "INQUIRY",
      "ENHANCEMENT"
    ],
    "functions": [
      "BILLING",
      "MEMBERSHIP",
      "REPORTING",
      "INTEGRATION",
      "NEW-LOCATION"
    ],
    "tags": [
      {
        "family": "Request type",
        "tag": "INCIDENT",
        "use": "Service is broken/degraded",
        "defaultPriority": "Impact-based",
        "companions": "Functional + impact tags",
        "example": "Collection processing fails",
        "owner": "Support/Engineering"
      },
      {
        "family": "Request type",
        "tag": "CORRECTION",
        "use": "Configuration/data must be corrected",
        "defaultPriority": "Important",
        "companions": "Functional tag",
        "example": "Incorrect membership setup",
        "owner": "Support/Implementation"
      },
      {
        "family": "Request type",
        "tag": "INQUIRY",
        "use": "Question or clarification only",
        "defaultPriority": "Relevant",
        "companions": "Functional tag",
        "example": "How a report works",
        "owner": "Support/CS"
      },
      {
        "family": "Request type",
        "tag": "ENHANCEMENT",
        "use": "New behavior/capability requested",
        "defaultPriority": "Preferable",
        "companions": "Functional tag",
        "example": "New report field",
        "owner": "Product"
      },
      {
        "family": "Function",
        "tag": "BILLING",
        "use": "Charges, collections, fees, refunds, payments",
        "defaultPriority": "Important",
        "companions": "FINANCIAL if monetary impact",
        "example": "Duplicate charge",
        "owner": "Payments/Product"
      },
      {
        "family": "Function",
        "tag": "MEMBERSHIP",
        "use": "Membership state, type, duplication, automation",
        "defaultPriority": "Important",
        "companions": "DATA-INTEGRITY if records affected",
        "example": "Duplicate membership",
        "owner": "Product"
      },
      {
        "family": "Function",
        "tag": "REPORTING",
        "use": "Reports, exports, missing fields/data",
        "defaultPriority": "Relevant",
        "companions": "OPS or FINANCIAL if consequential",
        "example": "BDD export failure",
        "owner": "Reporting/Product"
      },
      {
        "family": "Function",
        "tag": "INTEGRATION",
        "use": "Fiserv, Listen360 or third-party dependency",
        "defaultPriority": "Important",
        "companions": "Vendor/system tag",
        "example": "Fiserv migration issue",
        "owner": "Integration owner"
      },
      {
        "family": "Function",
        "tag": "NEW-LOCATION",
        "use": "Opening, configuration or launch dependency",
        "defaultPriority": "Important",
        "companions": "DEADLINE + T-7/T-3",
        "example": "Location setup blocked",
        "owner": "Implementation"
      },
      {
        "family": "Risk",
        "tag": "FINANCIAL",
        "use": "Revenue loss, refund, incorrect collection",
        "defaultPriority": "Urgent",
        "companions": "BILLING usually",
        "example": "MXN 1M/day impact",
        "owner": "Payments leadership"
      },
      {
        "family": "Risk",
        "tag": "SECURITY",
        "use": "Security exposure or suspected compromise",
        "defaultPriority": "Prioritary",
        "companions": "FRAUD if applicable",
        "example": "Carding attack",
        "owner": "Security"
      },
      {
        "family": "Risk",
        "tag": "DATA-INTEGRITY",
        "use": "Missing, duplicate or inconsistent data",
        "defaultPriority": "Urgent",
        "companions": "Functional tag",
        "example": "Missing COF",
        "owner": "Engineering/Product"
      },
      {
        "family": "Impact",
        "tag": "OPS",
        "use": "Operational process materially affected",
        "defaultPriority": "Important",
        "companions": "MULTI-LOCATION if broad",
        "example": "Manual workflow blocked",
        "owner": "Operations/Product"
      },
      {
        "family": "Impact",
        "tag": "MEMBER-IMPACT",
        "use": "Members charged/blocked/misinformed",
        "defaultPriority": "Urgent",
        "companions": "Functional tag",
        "example": "Members not suspended",
        "owner": "Support/Product"
      },
      {
        "family": "Scope",
        "tag": "MULTI-LOCATION",
        "use": "More than one club/location affected",
        "defaultPriority": "Urgent",
        "companions": "OPS",
        "example": "Collections disrupted broadly",
        "owner": "Support Manager"
      },
      {
        "family": "Behavior",
        "tag": "RECURRING",
        "use": "Repeated instability or repeat occurrence",
        "defaultPriority": "Urgent",
        "companions": "INCIDENT",
        "example": "Bulk charge instability",
        "owner": "Engineering"
      },
      {
        "family": "Behavior",
        "tag": "REGRESSION",
        "use": "Previously fixed behavior returned",
        "defaultPriority": "Urgent",
        "companions": "INCIDENT",
        "example": "Defect reappears",
        "owner": "Engineering"
      },
      {
        "family": "SLA",
        "tag": "NO-RESPONSE",
        "use": "No substantive response >24 business hours",
        "defaultPriority": "Increase 1",
        "companions": "SLA-BREACH",
        "example": "Agent silent >24h",
        "owner": "Support Manager"
      },
      {
        "family": "SLA",
        "tag": "STALE",
        "use": "No meaningful progress for 5 business days",
        "defaultPriority": "Increase 1",
        "companions": "AGEING",
        "example": "Unresolved export defect",
        "owner": "CS/Product"
      },
      {
        "family": "Deadline",
        "tag": "T-7",
        "use": "Deadline 4-7 calendar days away",
        "defaultPriority": "Urgent",
        "companions": "DEADLINE",
        "example": "Go-live in 6 days",
        "owner": "Manager/Product"
      },
      {
        "family": "Deadline",
        "tag": "T-3",
        "use": "Deadline <=3 calendar days away",
        "defaultPriority": "Prioritary",
        "companions": "DEADLINE",
        "example": "Go-live in 2 days",
        "owner": "Leadership"
      },
      {
        "family": "Not in Tagging Matrix",
        "tag": "OUTAGE",
        "use": "Referenced by Escalation Rules but has no Tagging Matrix row yet",
        "defaultPriority": "",
        "companions": "",
        "example": "",
        "owner": ""
      },
      {
        "family": "Not in Tagging Matrix",
        "tag": "FRAUD",
        "use": "Referenced by Escalation Rules but has no Tagging Matrix row yet",
        "defaultPriority": "",
        "companions": "",
        "example": "",
        "owner": ""
      },
      {
        "family": "Not in Tagging Matrix",
        "tag": "SLA-BREACH",
        "use": "Referenced by Escalation Rules but has no Tagging Matrix row yet",
        "defaultPriority": "",
        "companions": "",
        "example": "",
        "owner": ""
      },
      {
        "family": "Not in Tagging Matrix",
        "tag": "NO-PLAN",
        "use": "Referenced by Escalation Rules but has no Tagging Matrix row yet",
        "defaultPriority": "",
        "companions": "",
        "example": "",
        "owner": ""
      },
      {
        "family": "Not in Tagging Matrix",
        "tag": "DEADLINE",
        "use": "Referenced by Escalation Rules but has no Tagging Matrix row yet",
        "defaultPriority": "",
        "companions": "",
        "example": "",
        "owner": ""
      },
      {
        "family": "Not in Tagging Matrix",
        "tag": "LAUNCH",
        "use": "Referenced by Escalation Rules but has no Tagging Matrix row yet",
        "defaultPriority": "",
        "companions": "",
        "example": "",
        "owner": ""
      },
      {
        "family": "Not in Tagging Matrix",
        "tag": "NO-WORKAROUND",
        "use": "Referenced by Escalation Rules but has no Tagging Matrix row yet",
        "defaultPriority": "",
        "companions": "",
        "example": "",
        "owner": ""
      },
      {
        "family": "Not in Tagging Matrix",
        "tag": "EXEC-VISIBILITY",
        "use": "Referenced by Escalation Rules but has no Tagging Matrix row yet",
        "defaultPriority": "",
        "companions": "",
        "example": "",
        "owner": ""
      },
      {
        "family": "Not in Tagging Matrix",
        "tag": "AGEING",
        "use": "Referenced by Escalation Rules but has no Tagging Matrix row yet",
        "defaultPriority": "",
        "companions": "",
        "example": "",
        "owner": ""
      }
    ],
    "clauses": [
      {
        "id": "E01",
        "trigger": "Active outage / unusable core flow",
        "condition": "Payments, check-in, selling, member access or collections unavailable",
        "effect": "Set Prioritary",
        "tags": "OUTAGE; OPS",
        "escalateTo": "Support Lead; Engineering on-call",
        "channel": "Ticket + Teams/email leadership thread",
        "evidence": "Screenshots, timestamps, locations, error IDs",
        "clock": "Immediate",
        "notes": "No waiting for normal SLA",
        "logic": {
          "kind": "set",
          "level": "Prioritary"
        }
      },
      {
        "id": "E02",
        "trigger": "Active fraud or security event",
        "condition": "Carding, suspected breach, credential abuse, ongoing fraudulent attempts",
        "effect": "Set Prioritary",
        "tags": "SECURITY; FRAUD; BILLING",
        "escalateTo": "Security; Payments; Zenoti leadership",
        "channel": "Security incident channel + ticket",
        "evidence": "Attempt counts, timestamps, IP/device/payment evidence",
        "clock": "Immediate",
        "notes": "Containment and evidence preservation first",
        "logic": {
          "kind": "set",
          "level": "Prioritary"
        }
      },
      {
        "id": "E03",
        "trigger": "Material financial impact",
        "condition": "Confirmed or credible revenue loss/refund exposure",
        "effect": "Increase one level; set Prioritary if material and ongoing",
        "tags": "FINANCIAL; BILLING",
        "escalateTo": "Support Manager; Payments/Product leadership",
        "channel": "Ticket + executive escalation",
        "evidence": "MXN estimate, transactions, affected period",
        "clock": "Within 1 hour",
        "notes": "Document estimation method",
        "logic": {
          "kind": "up"
        }
      },
      {
        "id": "E04",
        "trigger": "Operational impact",
        "condition": "Multiple locations or critical workflow materially degraded",
        "effect": "Increase one level, maximum Urgent unless outage",
        "tags": "OPS; MULTI-LOCATION",
        "escalateTo": "Support Manager; Product owner",
        "channel": "Ticket + operations thread",
        "evidence": "Affected locations/users/processes",
        "clock": "Within 4 hours",
        "notes": "Use E01 if fully unavailable",
        "logic": {
          "kind": "up",
          "max": "Urgent"
        }
      },
      {
        "id": "E05",
        "trigger": "No agent response",
        "condition": "No substantive response for >24 business hours",
        "effect": "Increase one level",
        "tags": "SLA-BREACH; NO-RESPONSE",
        "escalateTo": "Support Manager",
        "channel": "Reply on ticket + email escalation",
        "evidence": "Last response timestamp and ticket ID",
        "clock": "At 24h",
        "notes": "Auto-escalate again at 48h",
        "logic": {
          "kind": "up",
          "auto": "agentResponse"
        }
      },
      {
        "id": "E06",
        "trigger": "No action plan",
        "condition": "No owner/ETA/action plan within target for current level",
        "effect": "Increase one level",
        "tags": "SLA-BREACH; NO-PLAN",
        "escalateTo": "Support Manager; CS Lead",
        "channel": "Ticket + governance tracker",
        "evidence": "Chronology and prior requests",
        "clock": "At SLA breach",
        "notes": "Substantive plan required",
        "logic": {
          "kind": "up"
        }
      },
      {
        "id": "E07",
        "trigger": "Deadline approaching",
        "condition": "Business deadline is 4-7 calendar days away",
        "effect": "Set at least Urgent",
        "tags": "DEADLINE; T-7",
        "escalateTo": "Product owner; Support Manager",
        "channel": "Ticket + project thread",
        "evidence": "Deadline, dependency, consequence",
        "clock": "At T-7",
        "notes": "Reassess daily",
        "logic": {
          "kind": "atLeast",
          "level": "Urgent",
          "auto": "deadline7"
        }
      },
      {
        "id": "E08",
        "trigger": "Deadline imminent",
        "condition": "Business deadline is <=3 calendar days away",
        "effect": "Set Prioritary",
        "tags": "DEADLINE; T-3",
        "escalateTo": "Zenoti leadership; Product/Engineering",
        "channel": "Leadership escalation",
        "evidence": "Deadline, launch plan, blocker",
        "clock": "At T-3",
        "notes": "Daily leadership checkpoint",
        "logic": {
          "kind": "set",
          "level": "Prioritary",
          "auto": "deadline3"
        }
      },
      {
        "id": "E09",
        "trigger": "Recurring/regression",
        "condition": "Same defect recurs after fix or >=3 times in 30 days",
        "effect": "Increase one level",
        "tags": "RECURRING; REGRESSION",
        "escalateTo": "Product/Engineering owner",
        "channel": "Problem record + linked tickets",
        "evidence": "Ticket history and reproduction",
        "clock": "On confirmation",
        "notes": "Request RCA and permanent fix",
        "logic": {
          "kind": "up"
        }
      },
      {
        "id": "E10",
        "trigger": "Data integrity",
        "condition": "Duplicate, missing, altered or inconsistent financial/member data",
        "effect": "Set at least Urgent; Prioritary if broad/ongoing",
        "tags": "DATA-INTEGRITY",
        "escalateTo": "Engineering; Product; Payments as applicable",
        "channel": "Ticket + incident thread",
        "evidence": "Samples, counts, before/after evidence",
        "clock": "Within 4 hours",
        "notes": "Avoid destructive corrections before backup",
        "logic": {
          "kind": "atLeast",
          "level": "Urgent"
        }
      },
      {
        "id": "E11",
        "trigger": "Member/customer harm",
        "condition": "Incorrect charges, access decisions or broad member-facing impact",
        "effect": "Increase one level",
        "tags": "MEMBER-IMPACT; BILLING if applicable",
        "escalateTo": "Support Manager; Product owner",
        "channel": "Ticket + customer impact log",
        "evidence": "Affected members, values, remediation",
        "clock": "Within 4 hours",
        "notes": "Track refunds/communications",
        "logic": {
          "kind": "up"
        }
      },
      {
        "id": "E12",
        "trigger": "New-location blocker",
        "condition": "Launch/opening/configuration dependency blocks new location",
        "effect": "Set at least Important; Urgent at T-7; Prioritary at T-3",
        "tags": "NEW-LOCATION; LAUNCH",
        "escalateTo": "Implementation; Support Manager",
        "channel": "Launch tracker + ticket",
        "evidence": "Location, go-live date, dependency",
        "clock": "Same day",
        "notes": "Deadline rules override",
        "logic": {
          "kind": "atLeast",
          "level": "Important"
        }
      },
      {
        "id": "E13",
        "trigger": "Workaround unavailable",
        "condition": "No safe practical workaround exists",
        "effect": "Increase one level",
        "tags": "NO-WORKAROUND",
        "escalateTo": "Support Manager; Product owner",
        "channel": "Ticket escalation",
        "evidence": "Attempted mitigations and results",
        "clock": "Same day",
        "notes": "State operational consequence",
        "logic": {
          "kind": "up",
          "auto": "noWorkaround"
        }
      },
      {
        "id": "E14",
        "trigger": "Executive/customer commitment",
        "condition": "Miss risks formal commitment or executive visibility",
        "effect": "Increase one level, capped by actual impact",
        "tags": "EXEC-VISIBILITY",
        "escalateTo": "CS Lead; Support Manager",
        "channel": "Governance thread",
        "evidence": "Commitment/date/stakeholder",
        "clock": "Same day",
        "notes": "Does not replace impact evidence",
        "logic": {
          "kind": "up"
        }
      },
      {
        "id": "E15",
        "trigger": "Stale unresolved issue",
        "condition": "No meaningful progress for 5 business days",
        "effect": "Increase one level",
        "tags": "STALE; AGEING",
        "escalateTo": "CS Lead; Product owner",
        "channel": "Weekly governance escalation",
        "evidence": "Timeline and blockers",
        "clock": "At day 5",
        "notes": "Repeat every 5 business days",
        "logic": {
          "kind": "up",
          "auto": "stale"
        }
      }
    ],
    "stages": [
      {
        "stage": "1. Intake",
        "when": "A new issue, defect, inquiry or enhancement is reported",
        "action": "Capture scope, locations, member impact, financial impact, workaround, deadline and evidence",
        "owner": "FPT issue owner",
        "output": "Complete intake record",
        "timing": "Same business day",
        "test": "Check E01-E14 immediately",
        "evidence": "Ticket ID, screenshots, timestamps, affected samples"
      },
      {
        "stage": "2. Classify",
        "when": "Intake has minimum required facts",
        "action": "Apply request type, function, risk, impact, scope, behavior and deadline tags",
        "owner": "FPT issue owner",
        "output": "Standard tag set",
        "timing": "At intake",
        "test": "Missing facts remain an explicit action",
        "evidence": "Tagging Matrix"
      },
      {
        "stage": "3. Prioritize",
        "when": "Impact and scope are understood",
        "action": "Assign base priority, then apply the highest escalation override",
        "owner": "FPT owner + Zenoti agent",
        "output": "Final priority",
        "timing": "At intake and every change",
        "test": "Any clause can raise priority; never lower without evidence",
        "evidence": "Priority rationale and clause IDs"
      },
      {
        "stage": "4. Assign commitments",
        "when": "Final priority is set",
        "action": "Record Zenoti owner, next action, target date and update cadence",
        "owner": "Zenoti agent / manager",
        "output": "Named owner and dated action plan",
        "timing": "Per priority target",
        "test": "No owner or plan triggers E06",
        "evidence": "Written action plan"
      },
      {
        "stage": "5. Monitor",
        "when": "Issue remains open",
        "action": "Update status, last substantive update, blockers, loss and next milestone",
        "owner": "FPT owner",
        "output": "Current working record",
        "timing": "Per priority cadence",
        "test": "No response >24h triggers E05; stale >5 business days triggers E15",
        "evidence": "Chronology and latest evidence"
      },
      {
        "stage": "6. Escalate",
        "when": "Clause threshold is met",
        "action": "Raise priority, add clause/tag, notify required leadership and request decision",
        "owner": "FPT software administration",
        "output": "Escalation record",
        "timing": "At threshold",
        "test": "T-7, T-3, financial, security, outage and data integrity checks",
        "evidence": "Email/Teams thread linked to ticket"
      },
      {
        "stage": "7. Close",
        "when": "Fix is deployed and verified",
        "action": "Validate outcome, reconcile data/money, document RCA/prevention, confirm no recurrence",
        "owner": "FPT owner + Zenoti owner",
        "output": "Closure package",
        "timing": "Before closing",
        "test": "Do not close on workaround alone unless explicitly accepted",
        "evidence": "Validation evidence, RCA and prevention owner"
      },
      {
        "stage": "8. Review",
        "when": "Weekly governance session",
        "action": "Review all Prioritary/Urgent items, stale items, deadlines and recurring themes",
        "owner": "FPT + Zenoti governance team",
        "output": "Decisions and action log",
        "timing": "Weekly",
        "test": "Open actions roll forward with owner/date",
        "evidence": "Governance minutes"
      }
    ]
  },
  "issues": [
    {
      "id": "INC-001",
      "title": "Collections Failure",
      "period": "Feb 2025",
      "detectedDate": "",
      "status": "Resolved",
      "requestType": "INCIDENT",
      "function": "BILLING",
      "tags": [
        "BILLING"
      ],
      "impactSummary": "Revenue collection disruption due to FreedomPay parameter changes",
      "financialImpact": null,
      "financialPeriod": "per day",
      "locations": "",
      "membersAffected": "",
      "workaround": "",
      "basePriority": "",
      "overridePriority": "",
      "clauses": [],
      "deadline": "",
      "lastUpdate": "",
      "lastAgentResponse": "",
      "recommendedAction": "",
      "reporter": "",
      "zenotiTicket": "",
      "zenotiOwner": "",
      "nextAction": "",
      "nextActionDue": "",
      "cadenceNote": "",
      "nextReview": "",
      "closureCriteria": "",
      "rcaRequired": "",
      "preventionOwner": "",
      "evidence": "",
      "closureNotes": "",
      "source": "Incident Timeline Report (resolved; excluded from the Issue Register). ID inferred from the INC numbering, which follows the report's order.",
      "log": [
        {
          "at": "2026-10-21",
          "type": "change",
          "text": "Added from the incident reports during the 2026-10-21 review."
        }
      ],
      "createdAt": "2026-10-21",
      "updatedAt": "2026-10-21"
    },
    {
      "id": "INC-002",
      "title": "Carding Attack",
      "period": "Jun 2025",
      "detectedDate": "",
      "status": "Closure not confirmed",
      "requestType": "INCIDENT",
      "function": "BILLING",
      "tags": [
        "SECURITY",
        "FRAUD",
        "BILLING"
      ],
      "impactSummary": "Thousands of fraudulent attempts; payment-channel risk",
      "financialImpact": null,
      "financialPeriod": "per day",
      "locations": "Multiple",
      "membersAffected": "",
      "workaround": "",
      "basePriority": "Prioritary",
      "overridePriority": "Prioritary",
      "clauses": [
        "E02"
      ],
      "deadline": "",
      "lastUpdate": "",
      "lastAgentResponse": "",
      "recommendedAction": "Confirm formal closure, containment evidence and RCA",
      "reporter": "",
      "zenotiTicket": "",
      "zenotiOwner": "",
      "nextAction": "",
      "nextActionDue": "",
      "cadenceNote": "",
      "nextReview": "",
      "closureCriteria": "",
      "rcaRequired": "",
      "preventionOwner": "",
      "evidence": "",
      "closureNotes": "",
      "source": "Issue Register, Zenoti_Future_Prioritization.xlsx",
      "log": [
        {
          "at": "2026-10-21",
          "type": "change",
          "text": "Imported from the Issue Register sheet."
        }
      ],
      "createdAt": "2026-10-21",
      "updatedAt": "2026-10-21"
    },
    {
      "id": "INC-003",
      "title": "Bulk Charge Instability",
      "period": "Jun 2025 onward",
      "detectedDate": "",
      "status": "Recurring",
      "requestType": "INCIDENT",
      "function": "BILLING",
      "tags": [
        "BILLING",
        "FINANCIAL",
        "RECURRING",
        "OPS"
      ],
      "impactSummary": "Collection delays and processing failures",
      "financialImpact": null,
      "financialPeriod": "per day",
      "locations": "Multiple",
      "membersAffected": "",
      "workaround": "",
      "basePriority": "Urgent",
      "overridePriority": "Urgent",
      "clauses": [
        "E03",
        "E04",
        "E09"
      ],
      "deadline": "",
      "lastUpdate": "",
      "lastAgentResponse": "",
      "recommendedAction": "Open problem record and demand permanent remediation plan",
      "reporter": "",
      "zenotiTicket": "",
      "zenotiOwner": "",
      "nextAction": "",
      "nextActionDue": "",
      "cadenceNote": "",
      "nextReview": "",
      "closureCriteria": "",
      "rcaRequired": "",
      "preventionOwner": "",
      "evidence": "",
      "closureNotes": "",
      "source": "Issue Register, Zenoti_Future_Prioritization.xlsx",
      "log": [
        {
          "at": "2026-10-21",
          "type": "change",
          "text": "Imported from the Issue Register sheet."
        }
      ],
      "createdAt": "2026-10-21",
      "updatedAt": "2026-10-21"
    },
    {
      "id": "INC-004",
      "title": "Members Not Suspended",
      "period": "Jun 2025",
      "detectedDate": "",
      "status": "Open/unknown",
      "requestType": "INCIDENT",
      "function": "MEMBERSHIP",
      "tags": [
        "MEMBERSHIP",
        "MEMBER-IMPACT",
        "DATA-INTEGRITY"
      ],
      "impactSummary": "Delinquent members remained active",
      "financialImpact": null,
      "financialPeriod": "per day",
      "locations": "Unknown",
      "membersAffected": "",
      "workaround": "",
      "basePriority": "Urgent",
      "overridePriority": "Urgent",
      "clauses": [
        "E10",
        "E11"
      ],
      "deadline": "",
      "lastUpdate": "",
      "lastAgentResponse": "",
      "recommendedAction": "Quantify members and revenue leakage; request RCA",
      "reporter": "",
      "zenotiTicket": "",
      "zenotiOwner": "",
      "nextAction": "",
      "nextActionDue": "",
      "cadenceNote": "",
      "nextReview": "",
      "closureCriteria": "",
      "rcaRequired": "",
      "preventionOwner": "",
      "evidence": "",
      "closureNotes": "",
      "source": "Issue Register, Zenoti_Future_Prioritization.xlsx",
      "log": [
        {
          "at": "2026-10-21",
          "type": "change",
          "text": "Imported from the Issue Register sheet."
        }
      ],
      "createdAt": "2026-10-21",
      "updatedAt": "2026-10-21"
    },
    {
      "id": "INC-005",
      "title": "Duplicate Charges",
      "period": "Mar 2026",
      "detectedDate": "",
      "status": "Resolved",
      "requestType": "INCIDENT",
      "function": "BILLING",
      "tags": [
        "BILLING"
      ],
      "impactSummary": "Refunds and customer impact",
      "financialImpact": null,
      "financialPeriod": "per day",
      "locations": "",
      "membersAffected": "",
      "workaround": "",
      "basePriority": "",
      "overridePriority": "",
      "clauses": [],
      "deadline": "",
      "lastUpdate": "",
      "lastAgentResponse": "",
      "recommendedAction": "",
      "reporter": "",
      "zenotiTicket": "",
      "zenotiOwner": "",
      "nextAction": "",
      "nextActionDue": "",
      "cadenceNote": "",
      "nextReview": "",
      "closureCriteria": "",
      "rcaRequired": "",
      "preventionOwner": "",
      "evidence": "",
      "closureNotes": "",
      "source": "Incident Timeline Report (resolved; excluded from the Issue Register). The Expanded report dates it \"2025/2026\". ID inferred from the INC numbering.",
      "log": [
        {
          "at": "2026-10-21",
          "type": "change",
          "text": "Added from the incident reports during the 2026-10-21 review."
        }
      ],
      "createdAt": "2026-10-21",
      "updatedAt": "2026-10-21"
    },
    {
      "id": "INC-006",
      "title": "Manual Collection Technical Errors",
      "period": "Jun 2026",
      "detectedDate": "",
      "status": "Open at time reported",
      "requestType": "INCIDENT",
      "function": "BILLING",
      "tags": [
        "BILLING",
        "FINANCIAL",
        "OPS",
        "MULTI-LOCATION"
      ],
      "impactSummary": "Approx. MXN 1M/day revenue impact reported",
      "financialImpact": 1000000,
      "financialPeriod": "per day",
      "locations": "Multiple",
      "membersAffected": "",
      "workaround": "",
      "basePriority": "Prioritary",
      "overridePriority": "Prioritary",
      "clauses": [
        "E01",
        "E03",
        "E04"
      ],
      "deadline": "",
      "lastUpdate": "",
      "lastAgentResponse": "",
      "recommendedAction": "Immediate leadership escalation; daily loss reconciliation",
      "reporter": "",
      "zenotiTicket": "",
      "zenotiOwner": "",
      "nextAction": "",
      "nextActionDue": "",
      "cadenceNote": "",
      "nextReview": "",
      "closureCriteria": "",
      "rcaRequired": "",
      "preventionOwner": "",
      "evidence": "",
      "closureNotes": "",
      "source": "Issue Register, Zenoti_Future_Prioritization.xlsx",
      "log": [
        {
          "at": "2026-10-21",
          "type": "change",
          "text": "Imported from the Issue Register sheet."
        }
      ],
      "createdAt": "2026-10-21",
      "updatedAt": "2026-10-21"
    },
    {
      "id": "INC-007",
      "title": "Fiserv Migration Issues",
      "period": "Jul-Aug 2026",
      "detectedDate": "",
      "status": "Active investigation",
      "requestType": "INCIDENT",
      "function": "INTEGRATION",
      "tags": [
        "INTEGRATION",
        "BILLING",
        "FINANCIAL",
        "OPS",
        "MULTI-LOCATION"
      ],
      "impactSummary": "Reduced collection rates and migration delays",
      "financialImpact": null,
      "financialPeriod": "per day",
      "locations": "Multiple",
      "membersAffected": "",
      "workaround": "",
      "basePriority": "Urgent",
      "overridePriority": "Urgent",
      "clauses": [
        "E03",
        "E04"
      ],
      "deadline": "",
      "lastUpdate": "",
      "lastAgentResponse": "",
      "recommendedAction": "Joint Zenoti/Fiserv recovery plan with owners and dates",
      "reporter": "",
      "zenotiTicket": "",
      "zenotiOwner": "",
      "nextAction": "",
      "nextActionDue": "",
      "cadenceNote": "",
      "nextReview": "",
      "closureCriteria": "",
      "rcaRequired": "",
      "preventionOwner": "",
      "evidence": "",
      "closureNotes": "",
      "source": "Issue Register, Zenoti_Future_Prioritization.xlsx",
      "log": [
        {
          "at": "2026-10-21",
          "type": "change",
          "text": "Imported from the Issue Register sheet."
        }
      ],
      "createdAt": "2026-10-21",
      "updatedAt": "2026-10-21"
    },
    {
      "id": "INC-008",
      "title": "BDD Export Failure",
      "period": "Aug-Oct 2026",
      "detectedDate": "",
      "status": "Unresolved as of Oct 2026",
      "requestType": "INCIDENT",
      "function": "REPORTING",
      "tags": [
        "REPORTING",
        "OPS",
        "STALE",
        "AGEING"
      ],
      "impactSummary": "Marketing operations impacted",
      "financialImpact": null,
      "financialPeriod": "per day",
      "locations": "Multiple",
      "membersAffected": "",
      "workaround": "",
      "basePriority": "Important",
      "overridePriority": "Urgent",
      "clauses": [
        "E04",
        "E15"
      ],
      "deadline": "",
      "lastUpdate": "",
      "lastAgentResponse": "",
      "recommendedAction": "Escalate stale issue and set restoration ETA",
      "reporter": "",
      "zenotiTicket": "",
      "zenotiOwner": "",
      "nextAction": "",
      "nextActionDue": "",
      "cadenceNote": "",
      "nextReview": "",
      "closureCriteria": "",
      "rcaRequired": "",
      "preventionOwner": "",
      "evidence": "",
      "closureNotes": "",
      "source": "Issue Register, Zenoti_Future_Prioritization.xlsx",
      "log": [
        {
          "at": "2026-10-21",
          "type": "change",
          "text": "Imported from the Issue Register sheet."
        }
      ],
      "createdAt": "2026-10-21",
      "updatedAt": "2026-10-21"
    },
    {
      "id": "FPT-003",
      "title": "Listen360 Integration",
      "period": "",
      "detectedDate": "",
      "status": "Open/unknown",
      "requestType": "INCIDENT",
      "function": "INTEGRATION",
      "tags": [
        "INTEGRATION",
        "OPS"
      ],
      "impactSummary": "Listen360 integration defect",
      "financialImpact": null,
      "financialPeriod": "per day",
      "locations": "Unknown",
      "membersAffected": "",
      "workaround": "",
      "basePriority": "Important",
      "overridePriority": "",
      "clauses": [
        "E04"
      ],
      "deadline": "",
      "lastUpdate": "",
      "lastAgentResponse": "",
      "recommendedAction": "Confirm scope, data flow and integration owner",
      "reporter": "",
      "zenotiTicket": "",
      "zenotiOwner": "",
      "nextAction": "",
      "nextActionDue": "",
      "cadenceNote": "",
      "nextReview": "",
      "closureCriteria": "",
      "rcaRequired": "",
      "preventionOwner": "",
      "evidence": "",
      "closureNotes": "",
      "source": "Issue Register, Zenoti_Future_Prioritization.xlsx (FPT tracker defect; no detection date in the reports)",
      "log": [
        {
          "at": "2026-10-21",
          "type": "change",
          "text": "Imported from the Issue Register sheet."
        }
      ],
      "createdAt": "2026-10-21",
      "updatedAt": "2026-10-21"
    },
    {
      "id": "FPT-006",
      "title": "EFT Allocation Report",
      "period": "",
      "detectedDate": "",
      "status": "Open/unknown",
      "requestType": "CORRECTION",
      "function": "REPORTING",
      "tags": [
        "REPORTING",
        "BILLING"
      ],
      "impactSummary": "EFT allocation reporting defect",
      "financialImpact": null,
      "financialPeriod": "per day",
      "locations": "Unknown",
      "membersAffected": "",
      "workaround": "",
      "basePriority": "Important",
      "overridePriority": "",
      "clauses": [
        "E04"
      ],
      "deadline": "",
      "lastUpdate": "",
      "lastAgentResponse": "",
      "recommendedAction": "Validate financial-operational impact and correct report",
      "reporter": "",
      "zenotiTicket": "",
      "zenotiOwner": "",
      "nextAction": "",
      "nextActionDue": "",
      "cadenceNote": "",
      "nextReview": "",
      "closureCriteria": "",
      "rcaRequired": "",
      "preventionOwner": "",
      "evidence": "",
      "closureNotes": "",
      "source": "Issue Register, Zenoti_Future_Prioritization.xlsx (FPT tracker defect; no detection date in the reports)",
      "log": [
        {
          "at": "2026-10-21",
          "type": "change",
          "text": "Imported from the Issue Register sheet."
        }
      ],
      "createdAt": "2026-10-21",
      "updatedAt": "2026-10-21"
    },
    {
      "id": "FPT-007",
      "title": "Decline Fee without IVA",
      "period": "",
      "detectedDate": "",
      "status": "Open/unknown",
      "requestType": "INCIDENT",
      "function": "BILLING",
      "tags": [
        "BILLING",
        "FINANCIAL",
        "DATA-INTEGRITY"
      ],
      "impactSummary": "Tax treatment defect on decline fee",
      "financialImpact": null,
      "financialPeriod": "per day",
      "locations": "Unknown",
      "membersAffected": "",
      "workaround": "",
      "basePriority": "Urgent",
      "overridePriority": "Urgent",
      "clauses": [
        "E03",
        "E10"
      ],
      "deadline": "",
      "lastUpdate": "",
      "lastAgentResponse": "",
      "recommendedAction": "Assess tax exposure; correct logic and impacted records",
      "reporter": "",
      "zenotiTicket": "",
      "zenotiOwner": "",
      "nextAction": "",
      "nextActionDue": "",
      "cadenceNote": "",
      "nextReview": "",
      "closureCriteria": "",
      "rcaRequired": "",
      "preventionOwner": "",
      "evidence": "",
      "closureNotes": "",
      "source": "Issue Register, Zenoti_Future_Prioritization.xlsx (FPT tracker defect; no detection date in the reports)",
      "log": [
        {
          "at": "2026-10-21",
          "type": "change",
          "text": "Imported from the Issue Register sheet."
        }
      ],
      "createdAt": "2026-10-21",
      "updatedAt": "2026-10-21"
    },
    {
      "id": "FPT-023",
      "title": "Missing Signatures",
      "period": "",
      "detectedDate": "",
      "status": "Open/unknown",
      "requestType": "INCIDENT",
      "function": "MEMBERSHIP",
      "tags": [
        "MEMBERSHIP",
        "DATA-INTEGRITY"
      ],
      "impactSummary": "Required signatures missing",
      "financialImpact": null,
      "financialPeriod": "per day",
      "locations": "Unknown",
      "membersAffected": "",
      "workaround": "",
      "basePriority": "Important",
      "overridePriority": "",
      "clauses": [
        "E10"
      ],
      "deadline": "",
      "lastUpdate": "",
      "lastAgentResponse": "",
      "recommendedAction": "Quantify records; define correction and prevention",
      "reporter": "",
      "zenotiTicket": "",
      "zenotiOwner": "",
      "nextAction": "",
      "nextActionDue": "",
      "cadenceNote": "",
      "nextReview": "",
      "closureCriteria": "",
      "rcaRequired": "",
      "preventionOwner": "",
      "evidence": "",
      "closureNotes": "",
      "source": "Issue Register, Zenoti_Future_Prioritization.xlsx (FPT tracker defect; no detection date in the reports)",
      "log": [
        {
          "at": "2026-10-21",
          "type": "change",
          "text": "Imported from the Issue Register sheet."
        }
      ],
      "createdAt": "2026-10-21",
      "updatedAt": "2026-10-21"
    },
    {
      "id": "FPT-025",
      "title": "Missing COF Data",
      "period": "",
      "detectedDate": "",
      "status": "Open/unknown",
      "requestType": "INCIDENT",
      "function": "BILLING",
      "tags": [
        "BILLING",
        "DATA-INTEGRITY"
      ],
      "impactSummary": "Card-on-file data missing",
      "financialImpact": null,
      "financialPeriod": "per day",
      "locations": "Unknown",
      "membersAffected": "",
      "workaround": "",
      "basePriority": "Urgent",
      "overridePriority": "Urgent",
      "clauses": [
        "E10"
      ],
      "deadline": "",
      "lastUpdate": "",
      "lastAgentResponse": "",
      "recommendedAction": "Investigate scope and safe remediation",
      "reporter": "",
      "zenotiTicket": "",
      "zenotiOwner": "",
      "nextAction": "",
      "nextActionDue": "",
      "cadenceNote": "",
      "nextReview": "",
      "closureCriteria": "",
      "rcaRequired": "",
      "preventionOwner": "",
      "evidence": "",
      "closureNotes": "",
      "source": "Issue Register, Zenoti_Future_Prioritization.xlsx (FPT tracker defect; no detection date in the reports)",
      "log": [
        {
          "at": "2026-10-21",
          "type": "change",
          "text": "Imported from the Issue Register sheet."
        }
      ],
      "createdAt": "2026-10-21",
      "updatedAt": "2026-10-21"
    },
    {
      "id": "FPT-038",
      "title": "CURP Validation",
      "period": "",
      "detectedDate": "",
      "status": "Open/unknown",
      "requestType": "INCIDENT",
      "function": "MEMBERSHIP",
      "tags": [
        "MEMBERSHIP",
        "DATA-INTEGRITY"
      ],
      "impactSummary": "CURP validation defect",
      "financialImpact": null,
      "financialPeriod": "per day",
      "locations": "Unknown",
      "membersAffected": "",
      "workaround": "",
      "basePriority": "Important",
      "overridePriority": "",
      "clauses": [
        "E10"
      ],
      "deadline": "",
      "lastUpdate": "",
      "lastAgentResponse": "",
      "recommendedAction": "Define invalid population and validation correction",
      "reporter": "",
      "zenotiTicket": "",
      "zenotiOwner": "",
      "nextAction": "",
      "nextActionDue": "",
      "cadenceNote": "",
      "nextReview": "",
      "closureCriteria": "",
      "rcaRequired": "",
      "preventionOwner": "",
      "evidence": "",
      "closureNotes": "",
      "source": "Issue Register, Zenoti_Future_Prioritization.xlsx (FPT tracker defect; no detection date in the reports)",
      "log": [
        {
          "at": "2026-10-21",
          "type": "change",
          "text": "Imported from the Issue Register sheet."
        }
      ],
      "createdAt": "2026-10-21",
      "updatedAt": "2026-10-21"
    },
    {
      "id": "FPT-062",
      "title": "Duplicate Memberships",
      "period": "",
      "detectedDate": "",
      "status": "Open/unknown",
      "requestType": "INCIDENT",
      "function": "MEMBERSHIP",
      "tags": [
        "MEMBERSHIP",
        "DATA-INTEGRITY",
        "MEMBER-IMPACT"
      ],
      "impactSummary": "Duplicate membership records",
      "financialImpact": null,
      "financialPeriod": "per day",
      "locations": "Unknown",
      "membersAffected": "",
      "workaround": "",
      "basePriority": "Urgent",
      "overridePriority": "Urgent",
      "clauses": [
        "E10",
        "E11"
      ],
      "deadline": "",
      "lastUpdate": "",
      "lastAgentResponse": "",
      "recommendedAction": "Deduplicate safely and fix creation logic",
      "reporter": "",
      "zenotiTicket": "",
      "zenotiOwner": "",
      "nextAction": "",
      "nextActionDue": "",
      "cadenceNote": "",
      "nextReview": "",
      "closureCriteria": "",
      "rcaRequired": "",
      "preventionOwner": "",
      "evidence": "",
      "closureNotes": "",
      "source": "Issue Register, Zenoti_Future_Prioritization.xlsx (FPT tracker defect; no detection date in the reports)",
      "log": [
        {
          "at": "2026-10-21",
          "type": "change",
          "text": "Imported from the Issue Register sheet."
        }
      ],
      "createdAt": "2026-10-21",
      "updatedAt": "2026-10-21"
    },
    {
      "id": "FPT-140",
      "title": "Suspended to Active Automation",
      "period": "",
      "detectedDate": "",
      "status": "Open/unknown",
      "requestType": "INCIDENT",
      "function": "MEMBERSHIP",
      "tags": [
        "MEMBERSHIP",
        "MEMBER-IMPACT",
        "OPS"
      ],
      "impactSummary": "Automation changes suspended members to active",
      "financialImpact": null,
      "financialPeriod": "per day",
      "locations": "Unknown",
      "membersAffected": "",
      "workaround": "",
      "basePriority": "Urgent",
      "overridePriority": "Urgent",
      "clauses": [
        "E04",
        "E11"
      ],
      "deadline": "",
      "lastUpdate": "",
      "lastAgentResponse": "",
      "recommendedAction": "Disable unsafe path if needed; quantify affected members",
      "reporter": "",
      "zenotiTicket": "",
      "zenotiOwner": "",
      "nextAction": "",
      "nextActionDue": "",
      "cadenceNote": "",
      "nextReview": "",
      "closureCriteria": "",
      "rcaRequired": "",
      "preventionOwner": "",
      "evidence": "",
      "closureNotes": "",
      "source": "Issue Register, Zenoti_Future_Prioritization.xlsx (FPT tracker defect; no detection date in the reports)",
      "log": [
        {
          "at": "2026-10-21",
          "type": "change",
          "text": "Imported from the Issue Register sheet."
        }
      ],
      "createdAt": "2026-10-21",
      "updatedAt": "2026-10-21"
    },
    {
      "id": "FPT-143",
      "title": "Membership Type Changes",
      "period": "",
      "detectedDate": "",
      "status": "Open/unknown",
      "requestType": "CORRECTION",
      "function": "MEMBERSHIP",
      "tags": [
        "MEMBERSHIP",
        "DATA-INTEGRITY"
      ],
      "impactSummary": "Membership type changes require correction",
      "financialImpact": null,
      "financialPeriod": "per day",
      "locations": "Unknown",
      "membersAffected": "",
      "workaround": "",
      "basePriority": "Important",
      "overridePriority": "",
      "clauses": [
        "E10"
      ],
      "deadline": "",
      "lastUpdate": "",
      "lastAgentResponse": "",
      "recommendedAction": "Confirm affected population and correction plan",
      "reporter": "",
      "zenotiTicket": "",
      "zenotiOwner": "",
      "nextAction": "",
      "nextActionDue": "",
      "cadenceNote": "",
      "nextReview": "",
      "closureCriteria": "",
      "rcaRequired": "",
      "preventionOwner": "",
      "evidence": "",
      "closureNotes": "",
      "source": "Issue Register, Zenoti_Future_Prioritization.xlsx (FPT tracker defect; no detection date in the reports)",
      "log": [
        {
          "at": "2026-10-21",
          "type": "change",
          "text": "Imported from the Issue Register sheet."
        }
      ],
      "createdAt": "2026-10-21",
      "updatedAt": "2026-10-21"
    },
    {
      "id": "FPT-144",
      "title": "Collections By Item Report",
      "period": "",
      "detectedDate": "",
      "status": "Open/unknown",
      "requestType": "CORRECTION",
      "function": "REPORTING",
      "tags": [
        "REPORTING",
        "BILLING",
        "OPS"
      ],
      "impactSummary": "Collections-by-item report defect",
      "financialImpact": null,
      "financialPeriod": "per day",
      "locations": "Unknown",
      "membersAffected": "",
      "workaround": "",
      "basePriority": "Important",
      "overridePriority": "",
      "clauses": [
        "E04"
      ],
      "deadline": "",
      "lastUpdate": "",
      "lastAgentResponse": "",
      "recommendedAction": "Document discrepancy and validate corrected totals",
      "reporter": "",
      "zenotiTicket": "",
      "zenotiOwner": "",
      "nextAction": "",
      "nextActionDue": "",
      "cadenceNote": "",
      "nextReview": "",
      "closureCriteria": "",
      "rcaRequired": "",
      "preventionOwner": "",
      "evidence": "",
      "closureNotes": "",
      "source": "Issue Register, Zenoti_Future_Prioritization.xlsx (FPT tracker defect; no detection date in the reports)",
      "log": [
        {
          "at": "2026-10-21",
          "type": "change",
          "text": "Imported from the Issue Register sheet."
        }
      ],
      "createdAt": "2026-10-21",
      "updatedAt": "2026-10-21"
    },
    {
      "id": "FPT-150",
      "title": "Balance Adjustments",
      "period": "",
      "detectedDate": "",
      "status": "Open/unknown",
      "requestType": "CORRECTION",
      "function": "BILLING",
      "tags": [
        "BILLING",
        "FINANCIAL",
        "DATA-INTEGRITY"
      ],
      "impactSummary": "Balance adjustments require correction",
      "financialImpact": null,
      "financialPeriod": "per day",
      "locations": "Unknown",
      "membersAffected": "",
      "workaround": "",
      "basePriority": "Urgent",
      "overridePriority": "Urgent",
      "clauses": [
        "E03",
        "E10"
      ],
      "deadline": "",
      "lastUpdate": "",
      "lastAgentResponse": "",
      "recommendedAction": "Reconcile balances and approve correction method",
      "reporter": "",
      "zenotiTicket": "",
      "zenotiOwner": "",
      "nextAction": "",
      "nextActionDue": "",
      "cadenceNote": "",
      "nextReview": "",
      "closureCriteria": "",
      "rcaRequired": "",
      "preventionOwner": "",
      "evidence": "",
      "closureNotes": "",
      "source": "Issue Register, Zenoti_Future_Prioritization.xlsx (FPT tracker defect; no detection date in the reports)",
      "log": [
        {
          "at": "2026-10-21",
          "type": "change",
          "text": "Imported from the Issue Register sheet."
        }
      ],
      "createdAt": "2026-10-21",
      "updatedAt": "2026-10-21"
    },
    {
      "id": "FPT-153",
      "title": "Billing Items Deletion",
      "period": "",
      "detectedDate": "",
      "status": "Open/unknown",
      "requestType": "INCIDENT",
      "function": "BILLING",
      "tags": [
        "BILLING",
        "DATA-INTEGRITY",
        "FINANCIAL"
      ],
      "impactSummary": "Billing items may be deleted",
      "financialImpact": null,
      "financialPeriod": "per day",
      "locations": "Unknown",
      "membersAffected": "",
      "workaround": "",
      "basePriority": "Urgent",
      "overridePriority": "Urgent",
      "clauses": [
        "E03",
        "E10"
      ],
      "deadline": "",
      "lastUpdate": "",
      "lastAgentResponse": "",
      "recommendedAction": "Protect data, audit deletions and correct permissions/logic",
      "reporter": "",
      "zenotiTicket": "",
      "zenotiOwner": "",
      "nextAction": "",
      "nextActionDue": "",
      "cadenceNote": "",
      "nextReview": "",
      "closureCriteria": "",
      "rcaRequired": "",
      "preventionOwner": "",
      "evidence": "",
      "closureNotes": "",
      "source": "Issue Register, Zenoti_Future_Prioritization.xlsx (FPT tracker defect; no detection date in the reports)",
      "log": [
        {
          "at": "2026-10-21",
          "type": "change",
          "text": "Imported from the Issue Register sheet."
        }
      ],
      "createdAt": "2026-10-21",
      "updatedAt": "2026-10-21"
    },
    {
      "id": "TBD-001",
      "title": "Annual Fee Logic Defect",
      "period": "",
      "detectedDate": "",
      "status": "Open/unknown",
      "requestType": "",
      "function": "BILLING",
      "tags": [
        "BILLING"
      ],
      "impactSummary": "",
      "financialImpact": null,
      "financialPeriod": "per day",
      "locations": "",
      "membersAffected": "",
      "workaround": "",
      "basePriority": "",
      "overridePriority": "",
      "clauses": [],
      "deadline": "",
      "lastUpdate": "",
      "lastAgentResponse": "",
      "recommendedAction": "",
      "reporter": "",
      "zenotiTicket": "",
      "zenotiOwner": "",
      "nextAction": "",
      "nextActionDue": "",
      "cadenceNote": "",
      "nextReview": "",
      "closureCriteria": "",
      "rcaRequired": "",
      "preventionOwner": "",
      "evidence": "",
      "closureNotes": "",
      "source": "Expanded Incident Report, Registro Consolidado only. No ID, date, status or impact in either report; needs intake.",
      "log": [
        {
          "at": "2026-10-21",
          "type": "change",
          "text": "Added from the incident reports during the 2026-10-21 review."
        }
      ],
      "createdAt": "2026-10-21",
      "updatedAt": "2026-10-21"
    }
  ]
};
