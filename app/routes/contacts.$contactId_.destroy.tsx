/*
 * @Author: BuXiongYu
 * @Date: 2025-05-19 14:56:48
 * @LastEditors: BuXiongYu
 * @LastEditTime: 2025-05-19 14:57:48
 * @Description: 请填写简介
 */
import type { ActionFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import invariant from "tiny-invariant";

import { deleteContact } from '../data'

export const action = async ({
  params,
}: ActionFunctionArgs) => {
  invariant(params.contactId, "Missing contactId param");
  await deleteContact(params.contactId);
  return redirect("/");
}