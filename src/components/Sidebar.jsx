import React, { Fragment } from "react";

const SideBar = () => {
  return (
    <Fragment>
      <div class="box has-background-white">
        <aside class="menu">
          <p class="menu-label has-text-grey-dark">General</p>
          <ul class="menu-list">
            <li>
              <a class="has-text-grey-dark">Dashboard</a>
            </li>
            <li>
              <a class="has-text-grey-dark">Customers</a>
            </li>
          </ul>
          <p class="menu-label has-text-grey-dark">Administration</p>
          <ul class="menu-list">
            <li>
              <a class="menu-label has-text-grey-dark">Team Settings</a>
            </li>
            <li>
              <a class="is-active">Manage Your Team</a>
              <ul>
                <li>
                  <a class="has-text-grey-dark">Members</a>
                </li>
                <li>
                  <a class="has-text-grey-dark">Plugins</a>
                </li>
                <li>
                  <a class="has-text-grey-dark">Add a member</a>
                </li>
              </ul>
            </li>
            <li>
              <a class="has-text-grey-dark">Invitations</a>
            </li>
            <li>
              <a class="has-text-grey-dark">
                Cloud Storage Environment Settings
              </a>
            </li>
            <li>
              <a class="has-text-grey-dark">Authentication</a>
            </li>
          </ul>
          <p class="menu-label has-text-grey-dark">Transactions</p>
          <ul class="menu-list">
            <li>
              <a class="has-text-grey-dark">Payments</a>
            </li>
            <li>
              <a class="has-text-grey-dark">Transfers</a>
            </li>
            <li>
              <a class="has-text-grey-dark">Balance</a>
            </li>
          </ul>
        </aside>
      </div>
    </Fragment>
  );
};

export default SideBar;
