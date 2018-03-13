/**
 * This file adds a wrapper to the MessageResponseWithContent to allow runtime
 * validation.
 */

import * as t from "io-ts";
import { strictInterfaceWithOptionals } from "../../utils/types";
import { NotificationStatus } from "../api/NotificationStatus";
import { CreatedMessageWithContent } from "./createdMessageWithContent";

// required attributes
const MessageResponseWithContentR = t.interface({
  message: CreatedMessageWithContent
});

// optional attributes
const MessageResponseWithContentO = t.partial({
  notification: NotificationStatus
});

export const MessageResponseWithContent = strictInterfaceWithOptionals(
  MessageResponseWithContentR.props,
  MessageResponseWithContentO.props,
  "MessageResponseWithContent"
);

export type MessageResponseWithContent = t.TypeOf<
  typeof MessageResponseWithContent
>;