import Unauthorized from "@/components/unauthorized";
import { getAuthUserDetails, verifyAndAcceptInvitation } from "@/lib/queries";
import { redirect } from "next/navigation";
import React from "react";
import { logServerEvent } from "@/lib/debug";
import { headers } from "next/headers";

type Props = {
  searchParams: { state: string; code: string };
};

const SubAccountMainPage = async ({ searchParams }: Props) => {
  // Log the start of execution and incoming parameters
  logServerEvent("SubAccountMainPage Execution Started", { searchParams });

  try {
    // Verify invitation
    const agencyId = await verifyAndAcceptInvitation();
    logServerEvent("Invitation Verification Result", { agencyId });

    if (!agencyId) {
      logServerEvent("No Agency ID - Returning Unauthorized");
      return <Unauthorized />;
    }

    // Get user details
    const user = await getAuthUserDetails();
    logServerEvent("User Details Retrieved", {
      userId: user?.id,
      hasPermissions: user?.Permissions,
    });

    if (!user) {
      logServerEvent("No User Found");
      return;
    }

    const getFirstSubaccountWithAccess = user.Permissions.find(
      (permission) => permission.access === true
    );

    logServerEvent("First Subaccount Access Check", {
      hasAccess: !!getFirstSubaccountWithAccess,
      subAccountId: getFirstSubaccountWithAccess?.subAccountId,
    });

    if (searchParams.state) {
      const statePath = searchParams.state.split("___")[0];
      const stateSubaccountId = searchParams.state.split("___")[1];

      logServerEvent("Processing State Parameters", {
        statePath,
        stateSubaccountId,
        originalState: searchParams.state,
      });

      if (!stateSubaccountId) {
        logServerEvent("No State SubaccountId - Returning Unauthorized");
        return <Unauthorized />;
      }

      const redirectUrl = `/subaccount/${stateSubaccountId}/${statePath}?code=${searchParams.code}`;
      logServerEvent("Redirecting with State", { redirectUrl });
      return redirect(redirectUrl);
    }

    if (getFirstSubaccountWithAccess) {
      const redirectUrl = `/subaccount/${getFirstSubaccountWithAccess.subAccountId}`;
      logServerEvent("Redirecting to First Subaccount", { redirectUrl });
      return redirect(redirectUrl);
    }

    logServerEvent("No Access Found - Returning Unauthorized");
    return <Unauthorized />;
  } catch (error) {
    logServerEvent("Error in SubAccountMainPage", {
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
    });
    throw error;
  }
};

export default SubAccountMainPage;
